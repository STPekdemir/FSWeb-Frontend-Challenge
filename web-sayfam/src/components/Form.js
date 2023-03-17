import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Form() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast("Your view sent!");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
    notify();
    reset();
  };

  return (
    <div className="flex justify-center mb-10">
      <Button variant="primary" onClick={handleShow}>
        Review Form
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Review Form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            className="flex flex-column justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              Name Surname
              <input
                type="text"
                {...register("nameSurname", {
                  required: "Please enter your name.",
                  minLength: {
                    value: 3,
                    message: "Your name can't be shorter than 3 letters!",
                  },
                })}
              />
            </label>
            {errors.nameSurname && (
              <p className="text-red-500">{errors.nameSurname.message}</p>
            )}
            <label>
              Your Company
              <input
                type="text"
                {...register("company", {
                  required: "Please enter your company name here!",
                })}
              />
            </label>
            {errors.company && (
              <p className="text-red-500">{errors.company.message}</p>
            )}
            <label>
              E-mail
              <input
                type="email"
                {...register("email", {
                  required: "Please enter your e-mail here!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </label>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label>
              Comments
              <textarea
                {...register("comments", {
                  required: "Please state your views here",
                  minLength: {
                    value: 10,
                    message: "Your input needs to be longer than 10.",
                  },
                  maxLength: {
                    value: 100,
                    message: "Your input cannot be higher than 100 letters.",
                  },
                })}
              />
            </label>
            {errors.comments && (
              <p className="text-red-500">{errors.comments.message}</p>
            )}

            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer />
    </div>
  );
}

export default Form;
