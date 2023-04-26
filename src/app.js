import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { doc } from "prettier"

const container = document.getElementById("container")
const openFilerMenu = document.getElementById("openFilerMenu")
const filterMenu = document.getElementById("filter-box")
const closeFilterMenu = document.getElementById("closeFilerMenu")
const searchTour = document.getElementById("btn-searchTour")
openFilerMenu.addEventListener('click',openFiler)
closeFilterMenu.addEventListener('click',closeFiler)

let currentTour





function openFiler(){

    filterMenu.style.display = "flex"
}
function closeFiler(){
    filterMenu.style.display = "none"
}




async function loadTours() {
    const response = await fetch(
        "https://www.bit-by-bit.ru/api/student-projects/tours"
    )
    const data = await response.json()
    return data
}



function showTours(tours) {
    container.innerHTML = ""
    tours.forEach((tour) => {
        let location

        if (tour.city === null) {
            location = `<h3 class="text-xl font-medium text-gray-700 px-2">${tour.country}</h3>`
        } else {
            location = `<h2 class="text-xl font-medium text-gray-700 px-2">${tour.city},</h2><h3 class="text-xl font-medium text-gray-700 px-2">${tour.country}</h3>`
        }

        container.innerHTML += `<div class="flex flex-col gap-1 bg-white drop-shadow-lg rounded-md justify-between">
    <div><img class="rounded-tl-md rounded-tr-md object-contain" src="${tour.image}" alt=""/></div>
    <div class="flex items-center justife-center">${location}</div>
    <div class="flex justify-between px-2">
    <h1 class="font-bold text-xl text-amber-700">${tour.hotelName}</h1>
    <div class="flex">
    <div class="items-center justify-center text-md font-medium text-justify text-gray-700">${
        tour.rating}</div>
        <div class="rating flex">
    </div></div></div>
    <div class="flex px-2 gap-1 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
      <p class="font-medium text-gray-600">${format(
          new Date(tour.startTime),
          "dd MMMM, yyyy",
          { locale: ru }
      )}</p><p class="font-medium text-gray-600"> - ${format(
            new Date(tour.endTime),
            "dd MMMM, yyyy",
            { locale: ru }
        )}</p></div>
    <div class="flex px-2 gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          
        <p class="text-lime-900 text-xl font-semibold">${tour.price}₽</p></div>
    <div class="flex gap-2 justify-between items-center py-4 px-2">
        <button class="btn-primary" id="btn-buyTour_${tour.id}">Забронировать</button>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-8 h-8 hover:fill-lime-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg></button>
          
    </div>`
    })

    tours.forEach((tour) => {

        const modalBox = document.getElementById("modal-box")
        const orderTour = document.getElementById(`btn-buyTour_${tour.id}`)
        const closeBtn = document.getElementById("closeModal")
        const tourImage = document.getElementById("modal-box__tour-image")
        const tourCountry = document.getElementById("modal-box__tour-country")
        const tourHotel = document.getElementById("modal-box__tour-hotel")
        const tourData = document.getElementById("modal-box__tour-data")
        const tourPrice = document.getElementById("modal-box__tour-price")
        const sendData = document.getElementById("buyTour")
        const tourOrderbox = document.getElementById("tourOrder-box")
        const successItem = document.getElementById("success")
        const errorItem = document.getElementById("error")


        orderTour.addEventListener('click', showModal)
        closeBtn.addEventListener('click', closeModal)
        sendData.addEventListener('click', sendTour)
    
        function showModal(){

            currentTour = tour.id
            
            modalBox.style.display = 'flex'
            tourOrderbox.style.display = 'flex'
            successItem.style.display = 'none'
            errorItem.style.display = 'none'

            tourImage.innerHTML = `<div class="flex flex-col gap-1 bg-white drop-shadow-lg rounded-md justify-between">
            <div><img class="rounded-tl-md rounded-tr-md object-contain" src="${tour.image}" alt=""/></div>`,
            tourCountry.innerHTML = tour.country,
            tourHotel.innerHTML = tour.hotelName,
            tourData.innerHTML = `<p class="font-medium text-gray-600">${format(
                new Date(tour.startTime),
                "dd MMMM, yyyy",
                { locale: ru }
            )}</p><p class="font-medium text-gray-600"> - ${format(
                  new Date(tour.endTime),
                  "dd MMMM, yyyy",
                  { locale: ru }
              )}</p></div>`,
            tourPrice.innerHTML = `<div class="flex px-2 gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              
            <p class="text-lime-900 text-xl font-semibold">${tour.price}₽</p></div>
        <div class="flex gap-2 justify-between items-center py-4 px-2">`


    
        }
        function closeModal(){

            modalBox.style.display = 'none'
        }
    
    })
}

async function sendTour(){
    const tourOrderbox = document.getElementById("tourOrder-box")
    const clientFirstName = document.getElementById("input-firstName").value
    const clientLastName = document.getElementById("input-lastName").value
    const clientPhone = document.getElementById("input-phone").value
    const clientMail = document.getElementById("input-mail").value
    const successItem = document.getElementById("success")
    const errorItem = document.getElementById("error")
    
    try {
        const url = `https://www.bit-by-bit.ru/api/student-projects/tours/${currentTour}`
    
        const newOrder ={
        customerName: clientFirstName + clientLastName,
        phone: clientPhone,
        email: clientMail

    }

      let response = await fetch(url, {
        method:"POST",
        body: JSON.stringify(newOrder)})

      let jsonData = await response.json()

      tourOrderbox.style.display = "none"

      successItem.style.display = "flex"
        
    } catch(error) {

        tourOrderbox.style.display = "none"

        errorItem.style.display = "flex"
    }
}




function filterTours(tours) {
    const noResults = document.getElementById('no-results')
    const country = document.getElementById('select-country').value
    const rate = document.getElementById('select-rate').value
    const minPrice = document.getElementById('min-price').value
    const maxPrice = document.getElementById('max-price').value

    const filteredCountry = tours.filter((tour) => {


        if(country === "all-country"){
            return true
        } else {
           return tour.country === country
        }

     })
    
    const filteredRate = filteredCountry.filter((tour) => {
            return tour.rating >= rate 
        })

        let filteredPrice = filteredRate.filter((tour)=> {
            if(maxPrice) {
                if(maxPrice >= tour.price){
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
              
         })

     filteredPrice = filteredPrice.filter((tour)=> {
        if(minPrice) {
            if(tour.price >= minPrice  ){
                return true
            } else {
                return false
            }
        } else {
            return true
        }
          
     })

   if(filteredPrice.length === 0){
            container.innerHTML = ""
            noResults.style.display = "flex"
    
        }else{
            noResults.style.display = "none"
            showTours(filteredPrice)}
}


async function init() {
    const tours = await loadTours()
    showTours(tours)

    searchTour.addEventListener('click', ()=> filterTours(tours))}

init()
