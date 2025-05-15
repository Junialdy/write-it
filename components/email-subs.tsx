"use client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { FormEvent, useState } from "react";

export default function EmailSubs() {
  const [submitted, setSubmitted] = useState<Record<
    string,
    FormDataEntryValue
  > | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <Form
      className="w-full max-w-md flex flex-row border-primary border-1.5 rounded-lg p-1 text-left border-opacity-50"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        classNames={{
          inputWrapper: "rounded-lg bg-transparent py-6",
        }}
        errorMessage={({ validationDetails, validationErrors }) => {
          if (validationDetails.typeMismatch) {
            return "Please enter a valid email address";
          }

          return validationErrors;
        }}
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Button className="rounded-lg py-6 px-8" color="primary" type="submit">
        Subscribe
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}
