import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type FormDataType = {
  userName: string;
  userId: string;
  phone: string;
  email: string;
  invoiceNum: string;
  date: string;
  randomCode: string;
};

export default function Form() {
  const [value, onChange] = useState<Value>(new Date());
  const [formData, setFormData] = useState<FormDataType>({
    userName: "",
    userId: "",
    phone: "",
    email: "",
    invoiceNum: "",
    date: "",
    randomCode: "",
  });

  return (
    <div className="flex flex-col gap-6 items-end">
      <div className="flex gap-4">
        <label htmlFor="">userName</label>
        <input className="border rounded" type="text" required value={formData.userName} autoComplete="name" />
      </div>
      <div className="flex gap-4">
        <label htmlFor="">userId</label>
        <input className="border rounded" type="text" required value={formData.userId} />
      </div>
      <div className="flex gap-4">
        <label htmlFor="">phone</label>
        <input className="border rounded" type="text" required value={formData.phone} autoComplete="phone" inputMode="tel" />
      </div>
      <div className="flex gap-4">
        <label htmlFor="">email</label>
        <input className="border rounded" type="email" required value={formData.email} autoComplete="email" inputMode="email" />
      </div>
      <div className="flex gap-4">
        <label htmlFor="">invoiceNum</label>
        <input className="border rounded" type="text" required value={formData.invoiceNum} />
      </div>
      <DatePicker onChange={onChange} value={value} maxDate={new Date()} calendarIcon={null} clearIcon={null} required />
      <div className="flex gap-4">
        <label htmlFor="">date</label>
        <input className="border rounded" type="text" required value={formData.date} />
      </div>
      <div className="flex gap-4">
        <label htmlFor="">randomCode</label>
        <input className="border rounded" type="text" value={formData.randomCode} inputMode="numeric" />
      </div>
    </div>
  );
}
