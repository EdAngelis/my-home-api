import { Duties } from "../models/index";
import { datesInterval } from "../utils/index";

const printDutiesNames = () => {
  Duties.forEach((duty) => {
    console.log(duty.name);
  });
};

// const printPendentsDuties = () => {
//   console.log("******************");
//   console.log("Pendents Duties:");
//   console.log("");

//   console.log("********************************************");

//   for (let duty of Duties) {
//     const dutyFrequenceDays = duty.frequencyDays;
//     const arraySize = duty.executionHistory?.length ?? 0;
//     const daysSinceLastExecution = duty.executionHistory?.length
//       ? datesInterval(new Date(), duty.executionHistory[0].date)
//       : 199;
//     if (daysSinceLastExecution > dutyFrequenceDays) {
//       console.log(
//         `${duty.name} ${
//           daysSinceLastExecution - dutyFrequenceDays
//         } Days Pendents`
//       );
//     }
//   }
//   console.log("");
//   console.log("********************************************");
//   console.log("");
// };

export { printDutiesNames };
