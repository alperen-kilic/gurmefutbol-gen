"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  link: string;
};

const FormInput = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
      <input
        className="border-2 p-2 border-orange-400 bg-zinc-100 placeholder-black/50 font-bold focus:outline-orange-600"
        type="text"
        placeholder="Link"
        {...register("link", { required: true })}
      />

      <input
        type="submit"
        className="bg-orange-400 rounded-full py-2 hover:bg-orange-500 cursor-pointer font-bold"
      />
    </form>
  );
};

export default FormInput;
