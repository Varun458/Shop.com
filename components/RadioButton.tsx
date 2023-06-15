import React from 'react'

export default function RadioButton(props:any) {
    return (
        <div>
        <div className=" py-4 flex cursor-pointer">
          <input className="mr-2 cursor-pointer form-check-input focus:bg-black text-2xl" type="radio" name="Radio" id="Radio" />
          <label className="font-thin mb-1 cursor-pointer text-lg" htmlFor="RadioDefault1"> {props.title}
          </label>
        </div>

        </div>
    )
}
