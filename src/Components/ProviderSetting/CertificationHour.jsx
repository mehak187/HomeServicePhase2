import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import SettingsPreview from "../MUI/SettingsPreview";
import { FaTrash } from "react-icons/fa6";
import CertificationHourModule from "../../modules/settings/provider-settings/CertificationHour";

const CertificationHour = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [schedule, setSchedule] = useState(
    days.map((day) => ({
      day,
      closed: false,
      slots: [{ start: "", end: "" }],
    }))
  );

  const updateSchedule = (dayIndex, newValues) => {
    setSchedule((prev) =>
      prev.map((item, index) =>
        index === dayIndex ? { ...item, ...newValues } : item
      )
    );
  };

  const handleFileChange = (e, fieldName) => {
    const uploadedFile = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: uploadedFile,
    }));
  };

  const [specialSchedule, setSpecialSchedule] = useState([
    {
      text: "",
      date: "",
      hour: [{ start: "", end: "" }],
      closed: false,
      Open24Hours: false,
    },
  ]);

  const updatespecialSchedule = (index, updatedFields) => {
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Updates the special schedule at the given index with the provided updated fields.
   * @param {number} index The index of the special schedule to update.
   * @param {object} updatedFields The fields to update in the special schedule.
   */
/******  97532f4e-6d06-4ac0-b818-a89be4bd7b44  *******/    const updatedSchedule = [...specialSchedule];
    updatedSchedule[index] = { ...updatedSchedule[index], ...updatedFields };
    setSpecialSchedule(updatedSchedule);
  };
  const deleteSlot = (index) => {
    const updatedSchedule = specialSchedule.filter((_, i) => i !== index);
    setSpecialSchedule(updatedSchedule);
  };

  const addNewEntry = () => {
    const newEntry = {
      text: "",
      date: "",
      hour: [{ start: "", end: "" }],
      closed: false,
      Open24Hours: false,
    };
    setSpecialSchedule([...specialSchedule, newEntry]);
  };

  const closeSpecificData = (index) => {
    updatespecialSchedule(index, { closed: !specialSchedule[index].closed });
  };

  return (
    <CertificationHourModule/>
    // <div>
    //   <form>
    //     <div>
    //       <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
    //         <p className="text-lg font-semibold text-[#181D27]">
    //           Certifications & Hours
    //         </p>
    //         <p className="text-[#535862] text-sm">
    //           Update your certifications & hours details.
    //         </p>
    //       </div>
    //       <div className="py-8 border-b">
    //         <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
    //           <div>
    //             <p className="text-sm font-semibold text-[#414651]">
    //               Upload Insurance Certificate
    //             </p>
    //           </div>
    //           <div className="md:col-span-2">
    //             <SettingsPreview
    //               onFileSelect={handleFileChange}
    //               fieldName="insurance_certificate"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="py-8 border-b">
    //         <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
    //           <div>
    //             <p className="text-sm font-semibold text-[#414651]">
    //               Upload Licensing Certificate
    //             </p>
    //           </div>
    //           <div className="md:col-span-2">
    //             <SettingsPreview
    //               onFileSelect={handleFileChange}
    //               fieldName="license_certificate"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="py-8 border-b">
    //         <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
    //           <div>
    //             <p className="text-sm font-semibold text-[#414651]">
    //               Upload Awards Certificate
    //             </p>
    //           </div>
    //           <div className="md:col-span-2">
    //             <SettingsPreview
    //               onFileSelect={handleFileChange}
    //               fieldName="award_certificate"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="py-8 border-b">
    //         <div className="py-8 border-b">
    //           <div className="grid lg:grid-cols-3 gap-2 max-w-[1000px]">
    //             <div>
    //               <p className="text-sm font-semibold">
    //                 Regular Hours of Operation
    //               </p>
    //             </div>
    //             <div className="sm:col-span-2">
    //               {schedule.map((item, dayIndex) => (
    //                 <div
    //                   key={item.day}
    //                   className="mb-4 md:grid grid-cols-3 gap-2"
    //                 >
    //                   <div>
    //                     <p>{item.day}</p>
    //                     <label className="flex gap-2 mt-2">
    //                       <input
    //                         type="checkbox"
    //                         checked={item.closed}
    //                         onChange={() =>
    //                           updateSchedule(dayIndex, { closed: !item.closed })
    //                         }
    //                       />
    //                       Closed
    //                     </label>
    //                     <label className="flex gap-2 mt-2">
    //                       <input type="checkbox" />
    //                       Open 24 Hours
    //                     </label>
    //                   </div>

    //                   {!item.closed && (
    //                     <div className="col-start-2 col-end-4">
    //                       {item.slots.map((slot, slotIndex) => (
    //                         <div
    //                           key={slotIndex}
    //                           className="flex items-center gap-2 mt-2"
    //                         >
    //                           <input
    //                             type="time"
    //                             className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow"
    //                             value={slot.start}
    //                             onChange={(e) => {
    //                               const slots = [...item.slots];
    //                               slots[slotIndex].start = e.target.value;
    //                               updateSchedule(dayIndex, { slots });
    //                             }}
    //                           />
    //                           <input
    //                             type="time"
    //                             className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow"
    //                             value={slot.end}
    //                             onChange={(e) => {
    //                               const slots = [...item.slots];
    //                               slots[slotIndex].end = e.target.value;
    //                               updateSchedule(dayIndex, { slots });
    //                             }}
    //                           />
    //                           <button
    //                             type="button"
    //                             onClick={() =>
    //                               updateSchedule(dayIndex, {
    //                                 slots: item.slots.filter(
    //                                   (_, i) => i !== slotIndex
    //                                 ),
    //                               })
    //                             }
    //                           >
    //                             <FaTrash />
    //                           </button>
    //                         </div>
    //                       ))}
    //                       <button
    //                         type="button"
    //                         className="py-2"
    //                         onClick={() =>
    //                           updateSchedule(dayIndex, {
    //                             slots: [...item.slots, { start: "", end: "" }],
    //                           })
    //                         }
    //                       >
    //                         <FaPlusCircle />
    //                       </button>
    //                     </div>
    //                   )}
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="py-8 border-b">
    //         <div className="grid lg:grid-cols-3 gap-2 max-w-[1000px]">
    //           <div>
    //             <p className="text-sm font-semibold">
    //               Special Hours of Operation
    //             </p>
    //             <p className="text-[#535862] text-sm">
    //               This is to show your hours around holidays. This will be
    //               publicly displayed.
    //             </p>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <div>
    //               {specialSchedule.map((item, dayIndex) => (
    //                 <div key={item.day} className="mb-4 grid md:grid-cols-3">
    //                   <div className="md:col-start-2 md:col-end-4">
    //                     <div className="grid grid-cols-2 gap-4">
    //                       <div>
    //                         <input
    //                           type="text"
    //                           className="border border-[#D5D7DA] p-3 rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none w-full"
    //                           placeholder="list holiday"
    //                           value={item.text}
    //                           onChange={(e) =>
    //                             updatespecialSchedule(dayIndex, {
    //                               text: e.target.value,
    //                             })
    //                           }
    //                         />
    //                       </div>
    //                       <div className="flex items-center gap-2">
    //                         <input
    //                           type="date"
    //                           className="border border-[#D5D7DA] p-3 rounded-[8px] shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none w-[calc(100%-25px)]"
    //                           value={item.date}
    //                           onChange={(e) =>
    //                             updatespecialSchedule(dayIndex, {
    //                               date: e.target.value,
    //                             })
    //                           }
    //                         />
    //                         <button
    //                           type="button"
    //                           className="text-gray-700 sm:w-auto flex-shrink-0"
    //                           onClick={() => deleteSlot(dayIndex)}
    //                         >
    //                           <FaTrash />
    //                         </button>
    //                       </div>
    //                     </div>
    //                     <div className="flex items-center gap-4 mt-2 w-full">
    //                       <label className="flex items-center gap-2">
    //                         <input
    //                           type="checkbox"
    //                           checked={item.closed}
    //                           onChange={() => closeSpecificData(dayIndex)}
    //                         />
    //                         Closed
    //                       </label>
    //                       <label
    //                         key={dayIndex}
    //                         className="flex text-nowrap items-center gap-2"
    //                       >
    //                         <input
    //                           type="checkbox"
    //                           checked={item.Open24Hours}
    //                           onChange={() =>
    //                             updatespecialSchedule(dayIndex, {
    //                               Open24Hours: !item.Open24Hours,
    //                             })
    //                           }
    //                         />
    //                         Open 24 Hours
    //                       </label>
    //                     </div>
    //                     {item.hour?.map((slot, slotIndex) => (
    //                       <div
    //                         key={slotIndex}
    //                         className="grid grid-cols-2 gap-4 mt-2"
    //                       >
    //                         <div>
    //                           <input
    //                             type="time"
    //                             className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow"
    //                             value={slot.start}
    //                             onChange={(e) => {
    //                               const slots = [...item.hour];
    //                               slots[slotIndex].start = e.target.value;
    //                               updatespecialSchedule(dayIndex, {
    //                                 slots,
    //                               });
    //                             }}
    //                           />
    //                         </div>
    //                         <div>
    //                           <input
    //                             type="time"
    //                             className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow"
    //                             value={slot.end}
    //                             onChange={(e) => {
    //                               const slots = [...item.hour];
    //                               slots[slotIndex].end = e.target.value;
    //                               updatespecialSchedule(dayIndex, {
    //                                 slots,
    //                               });
    //                             }}
    //                           />
    //                         </div>
    //                       </div>
    //                     ))}
    //                     <div className="flex gap-3 mt-2 w-full">
    //                       <button
    //                         type="button"
    //                         className="py-2 sm:w-auto"
    //                         onClick={addNewEntry}
    //                       >
    //                         <FaPlusCircle />
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid max-w-[550px] grid-cols-3 my-4 gap-2 ms-auto">
    //         <button className="border border-gray-300 rounded-lg py-[10px] w-full font-semibold bg-white">
    //           Cancel
    //         </button>
    //         <button className="border rounded-lg p-3 w-full text-white font-semibold bg-[#0F91D2]">
    //           Save & Publish
    //         </button>
    //         <button className="border rounded-lg p-3 w-full text-white font-semibold bg-[#0F91D2]">
    //           Save
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

export default CertificationHour;
