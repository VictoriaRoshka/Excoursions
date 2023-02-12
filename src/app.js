import { format} from 'date-fns'
import { ru } from 'date-fns/locale';


const container = document.getElementById('container')

async function showTours(){

  const response = await fetch('https://www.bit-by-bit.ru/api/student-projects/tours')
  const tours = await response.json()
  console.log(tours)
  
  
  tours.forEach(tour => {

    container.innerHTML += `<div class="flex flex-col gap-1 bg-white drop-shadow-lg rounded-md justify-between">
    <div><img class="rounded-tl-md rounded-tr-md object-contain" src="${tour.image}" alt=""/></div>
    <div class="flex items-center justife-center"><h2 class="text-xl font-medium text-gray-700 px-2">${tour.city},</h2><h3 class="text-xl font-medium text-gray-700 px-2">${tour.country}</h3></div>
    <div class="flex justify-between px-2"><h1 class="font-bold text-xl text-amber-700">${tour.hotelName}</h1>
  <div class="rating flex"><div class="items-center justify-center text-md font-medium text-justify text-gray-700">${tour.rating}</div></div></div>
    <div class="flex px-2 gap-1 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
      <p class="font-medium text-gray-600">${format(new Date(tour.startTime),'dd MMMM, yyyy',{locale:ru})}</p><p class="font-medium text-gray-600"> - ${format(new Date(tour.endTime),'dd MMMM, yyyy',{locale:ru})}</p></div>
    <div class="flex px-2 gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          
        <p class="text-lime-900 text-xl font-semibold">${tour.price}₽</p></div>
    <div class="flex gap-2 justify-between items-center py-4 px-2">
        <button class="btn-primary">Подробнее</button>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-8 h-8 hover:fill-lime-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg></button>
          
    </div>`
    
  });
  // let searchCity = null
  // let emptyCityObject = tours.filter(tour => tour.city === searchCity)
  // console.log(emptyCityObject)

  // emptyCityObject.forEach(object =>{
  //   container.innerHTML += `<div class="flex flex-col gap-1 bg-white drop-shadow-lg rounded-md justify-between">
  //   <div><img class="rounded-tl-md rounded-tr-md object-contain" src="${object.image}" alt=""/></div>
  //   <div class="flex items-center justife-center"><h3 class="text-xl font-medium text-gray-700 px-2">${object.country}</h3></div>
  //   <div class="flex justify-between px-2"><h1 class="font-bold text-xl text-amber-700">${object.hotelName}</h1>
  // <div class="rating flex"><div class="items-center justify-center text-md font-medium text-justify text-gray-700">${tour.rating}</div></div></div>
  //   <div class="flex px-2 gap-1 items-center">
  //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  //       <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  //     </svg>
  //     <p class="font-medium text-gray-600">${format(new Date(object.startTime),'dd MMMM, yyyy',{locale:ru})}</p><p class="font-medium text-gray-600"> - ${format(new Date(object.endTime),'dd MMMM, yyyy',{locale:ru})}</p></div>
  //   <div class="flex px-2 gap-1 items-center">
  //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  //           <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  //         </svg>
          
  //       <p class="text-lime-900 text-xl font-semibold">${object.price}₽</p></div>
  //   <div class="flex gap-2 justify-between items-center py-4 px-2">
  //       <button class="btn-primary">Подробнее</button>
  //       <button><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-8 h-8 hover:fill-lime-700">
  //           <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  //         </svg></button>
          
  //   </div>`
  // })
}


showTours()