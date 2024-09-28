import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  buttonText,
  isBtnDisabled,
  onSubmit,
}) => {
  const renderInputElement = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || "";
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              });
            }}
          />
        );
        break;
      case 'textarea':
        element=(
          <Textarea
          name={getControlItem.name}
          type={getControlItem.type}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          value={value}
          onChange={(e)=>{
            setFormData({
              ...formData,[getControlItem.name]:e.target.value
            })
          }}
          />
        )
        break; 
      case 'select':
        element=(
          <Select >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder}/>
              </SelectTrigger>
              <SelectContent>7
                {getControlItem.options && getControlItem.options.length>0?
                getControlItem.options.map((item)=>(
                  <SelectItem key={item.id} value={item.id}>
                    {item.label}
                  </SelectItem>
                )):null }
              </SelectContent>
          </Select>
        )
        break;  
      default:
        element= (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              });
            }}
          />
        );
        break;
    }
    return element
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          {formControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
              <Label className="mb-1">{controlItem.label}</Label>
              {renderInputElement(controlItem)}
            </div>
          ))}
        </div>
        <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
          {buttonText||"Submit"}
        </Button>
      </form>
    </>
  );
};

export default CommonForm;
