// 'use strict';
// const labelsForEvents = document.querySelectorAll('label.labelForType');
// const typeOfEvent = document.getElementById('typeOfEvent');

// const hideLabels = () => {
//     labelsForEvents.forEach(item => {
//         item.style.display = 'none';
//     });
// }

// const changeLabels = () => {
//     hideLabels();
//     typeOfEvent.addEventListener('change', () => {
//         hideLabels();
//         switch (typeOfEvent.value) {
//             case 'meeting':
//                 labelsForEvents[0].style.display = '';
//                 labelsForEvents[1].style.display = '';
//                 break;
//             case 'purchases':
//                 labelsForEvents[2].style.display = '';
//                 break;
//             case 'lesson':
//                 labelsForEvents[3].style.display = '';
//                 labelsForEvents[4].style.display = '';
//                 break;
//             case 'other':
//                 labelsForEvents[5].style.display = '';
//                 break;
//         }
//     })
// };

// const resetForm = () => {
//     const form = document.getElementById('newEventForm');
//     form.reset();
// }

// export { changeLabels, resetForm }