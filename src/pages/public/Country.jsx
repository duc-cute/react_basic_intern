/** @format */

import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";
import { LuPencilLine } from "react-icons/lu";
import { Button, Input, Modal, Table } from "~/components";
import { countryData } from "~/ultils/constant";
import swal from "sweetalert2";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { CountrySchema } from "~/ultils/validate";
const Country = () => {
  const [dataCountry, setDataCountry] = useState([]);
  const [isModalUpdate, setIsModalUpdate] = useState(false);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [dataUser, setDataUser] = useState({
    code: "",
    description: "",
    name: "",
  });

  const formikUpdate = useFormik({
    initialValues: dataUser,
    onSubmit: (value) => handleUpdate(value),
    validationSchema: CountrySchema,
  });

  const formikAdd = useFormik({
    initialValues: dataUser,
    onSubmit: (value) => handleAdd(value),
    validationSchema: CountrySchema,
  });

  const handleDelete = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const newListCountry = dataCountry.filter((el) => el.stt !== id);
          setDataCountry(newListCountry);
          swal.fire({
            title: "Deleted!",
            text: "Bạn xóa thành công!",
            icon: "success",
          });
        }
      });
  };

  const handleShowModalUpdate = (id) => {
    setIsModalUpdate(true);
    setDataUser(dataCountry.find((country) => country?.stt === id));
  };

  const handleAdd = (data) => {
    setDataCountry([...dataCountry, { ...data, stt: dataCountry.length }]);
    setIsModalAdd(false);
    setDataUser(null);
    toast.success("Thêm data thành công!");
  };

  const handleUpdate = (data) => {
    const newData = dataCountry.map((el) => {
      if (el?.stt === data.stt) return { ...el, ...data };
      else return el;
    });
    setDataCountry(newData);
    setDataUser(null);
    setIsModalUpdate(false);
    toast.success("Bạn đã update thành công!");
  };


  const countryColumns = [
    {
      title: "STT",
      key: "stt",
      render: (stt) => (
        <span className="text-[#1677ff] cursor-pointer">{stt}</span>
      ),
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Code",
      key: "code",
    },
    {
      title: "Description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, ind, info) => (
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <span onClick={() => handleDelete(info?.stt)}>
            <FiTrash2 color="red" />
          </span>
          <span onClick={() => handleShowModalUpdate(info?.stt)}>
            <LuPencilLine color="#1677ff" />
          </span>
        </div>
      ),
    },
  ];

  const groupButton = [
    {
      id: 1,
      button: (
        <Button
          handleOnClick={() => setIsModalAdd(true)}
          className={
            "py-[10px] text-white rounded-md bg-[#1677ff] flex gap-1 items-center font-lato text-[14px]"
          }
        >
          <TiPlus />
          Thêm mới
        </Button>
      ),
    },
  ];

  useEffect(() => {
    if (dataUser) {
      formikUpdate.setValues(dataUser);
    }
  }, [dataUser, isModalUpdate, isModalAdd]);

  // Initial Data Table
  useEffect(() => {
    let dataFormat = countryData.map((country, ind) => {
      const { name, code, description } = country;
      return {
        stt: ind,
        name,
        code,
        description,
      };
    });
    setDataCountry(dataFormat);
  }, []);

  return (
    <>
      <div className="m-10 shrink-0">
        <Table
          columns={countryColumns}
          title={"Data Country"}
          data={dataCountry}
          groupButton={groupButton}
        />
      </div>
      <Modal isModal={isModalUpdate} setIsModal={setIsModalUpdate}>
        <div className="w-full bg-white rounded-lg px-5 py-4">
          <form
            onSubmit={formikUpdate.handleSubmit}
            className="flex flex-col gap-4"
          >
            <Input
              label={"Name"}
              name={"name"}
              placeholder={"Enter name"}
              formik={formikUpdate}
              value={formikUpdate.values.name}
            />
            <Input
              formik={formikUpdate}
              label={"Code"}
              name={"code"}
              placeholder={"Enter code"}
              value={formikUpdate.values.code}
            />
            <Input
              formik={formikUpdate}
              label={"Description"}
              name={"description"}
              placeholder={"Enter description"}
              value={formikUpdate.values.description}
            />

            <Button
              type="submit"
              className={
                "py-[10px] text-white rounded-md bg-[#1677ff] flex gap-1 items-center font-lato text-[18px]"
              }
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
      <Modal isModal={isModalAdd} setIsModal={setIsModalAdd}>
        <div className="w-full bg-white rounded-lg px-5 py-4">
          <form
            onSubmit={formikAdd.handleSubmit}
            className="flex flex-col gap-4"
          >
            <Input
              label={"Name"}
              name={"name"}
              placeholder={"Enter country"}
              formik={formikAdd}
            />
            <Input
              formik={formikAdd}
              label={"Code"}
              name={"code"}
              placeholder={"Enter code"}
            />
            <Input
              formik={formikAdd}
              label={"Description"}
              name={"description"}
              placeholder={"Enter description"}
            />

            <Button
              type="submit"
              className={
                "py-[10px] text-white rounded-md bg-[#1677ff] flex gap-1 items-center font-lato text-[18px]"
              }
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Country;
