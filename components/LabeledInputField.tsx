import { ReferenceType } from "@floating-ui/react";

export default function LabeledInputField({
  label,
  id,
  onChange,
  required,
  value,
  autoComplete,
  inputMode,
  placeholder,
  setReference,
  setFloating,
  isMounted,
  styles,
  validationMessages,
}: {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  value: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute | undefined;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  placeholder?: string | undefined;
  setReference: (node: ReferenceType | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  isMounted: boolean;
  styles: React.CSSProperties;
  validationMessages: string;
}) {
  return (
    <div className="label-input-field">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        onChange={onChange}
        id={id}
        className="input"
        type="text"
        required={required}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        ref={setReference}
      />
      {isMounted && (
        <div
          ref={setFloating}
          style={styles}
          className="bg-[#ff7f01] text-white p-2 rounded"
        >
          {validationMessages}
        </div>
      )}
    </div>
  );
}
