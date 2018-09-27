let whatsappcontacts = [
    {
        "name": "Maria Azhar",
        "image": "5.jpg",
        "message": "ready",
        "messageCheck": "seen",
        "phoneNumber": "03227878787",
        "email": "syedaazhar@gmail.com",
        "status": "hey their i am using whatsapp",
        "lastMessageCheck": "9:30 PPM"
    },

    {
        "name": "Iffo",
        "image": "1.jpg",
        "message": "bhf dhth hhhth..",
        "messageCheck": "not delivered",
        "phoneNumber": "0327976549",
        "email": "ifrares@gmail.com",
        "status": "busy",
        "lastMessageCheck": "yesterday"
    },

    {
        "name": "Anum",
        "image": "2.jpg",
        "message": "hhh lll,srgrgmgrebdbb...",
        "messageCheck": "sent",
        "phoneNumber": "032656576",
        "email": "anumfaraz@gmail.com",
        "status": "Avalible",
        "lastMessageCheck": "7:19 PM"
    },

    {
        "name": "Arsalan",
        "image": "9.jpg",
        "message": "jjjj iyhktjtd jgj...",
        "messageCheck": "seen",
        "phoneNumber": "5685697965",
        "email": "arsalan_khan@gmail.com",
        "status": "i am a tainted wether of the flock",
        "lastMessageCheck": "yesterday"
    },

    {
        "name": "Humza",
        "image": "15.jpg",
        "message": "hvhvhvh hhb",
        "messageCheck": "not delivered",
        "phoneNumber": "0656565787",
        "email": "hamza_khan@yahoo.com",
        "status": "blessed",
        "lastMessageCheck": "12:20 PM"
    },

    {
        "name": "mobi",
        "image": "12.jpg",
        "message": "gggrfrg grgg...",
        "messageCheck": "sent",
        "phoneNumber": "06767688687",
        "email": "chhooram@gmail.com",
        "status": "just love the way i am",
        "lastMessageCheck": "yeaterday"
    },

    {
        "name": "Niha Amin",
        "image": "13.jpg",
        "message": "gkndkgn sgb...",
        "messageCheck": "not delivered",
        "phoneNumber": "66313265497",
        "email": "nihaamin21@gmail.com",
        "status": "goodby",
        "lastMessageCheck": "yesterday"
    },

    {
        "name": "Qurrat-ul-Ain",
        "image": "12.jpg",
        "message": "gjjdj gdkjkhjtj",
        "messageCheck": "sent",
        "phoneNumber": "0320858797",
        "email": "qurrat_ainy@gmail.com",
        "status": "hey their i am using whatsapp",
        "lastMessageCheck": "10:00 AM"
    },

    {
        "name": "Afnan Amin",
        "image": "14.jpg",
        "message": "fjlsglg gjfkgj ",
        "messageCheck": "sent",
        "phoneNumber": "036863388967",
        "email": "afnan_amin19@gmail.com",
        "status": "Avalible",
        "lastMessageCheck": "wednesday"
    },

    {
        "name": "Sana Asif",
        "image": "8.jpg",
        "message": "hello hello",
        "messageCheck": "sent",
        "phoneNumber": "0356798433",
        "email": "asif_sana@yahoo.com",
        "status": "hey their i am using whatsapp",
        "lastMessageCheck": "7:55 AM"
    },

    {
        "name": "Fatima",
        "image": "7.jpg",
        "message": "ready ready",
        "messageCheck": "sent",
        "phoneNumber": "055578787",
        "email": "fatima@gmail.com",
        "status": "i am back ",
        "lastMessageCheck": "11:00 PM"
    },

    {
        "name": "Sadaf Mamsa",
        "image": "4.jpg",
        "message": "jhh srg hdhdh hh..",
        "messageCheck": "seen",
        "phoneNumber": "067578787",
        "email": "sadaf_mamsa@gmail.com",
        "status": "Dear Problem MY ALLAH is greater than you",
        "lastMessageCheck": "yesterday"
    },

    {
        "name": "Rabia Bhabhi",
        "image": "11.jpg",
        "message": "jhh j hhghg",
        "messageCheck": "sent",
        "phoneNumber": "064654747",
        "email": "rabia_rehan@gmail.com",
        "status": "Every day is a second chaance  of life",
        "lastMessageCheck": "7/31/18"
    },

    {
        "name": "asma",
        "image": "16.jpg",
        "message": "hjhjksjgss hjgj",
        "messageCheck": "seen",
        "phoneNumber": "0367757689687",
        "email": "asamm@gmail.com",
        "status": "Available",
        "lastMessageCheck": "7/31/18"
    },

    {
        "name": "Ariba",
        "image": "6.jpg",
        "message": "g htdhdtht dhd",
        "messageCheck": "not delivered",
        "phoneNumber": "032566787",
        "email": "ariba1@gmail.com",
        "status": "Can't Talk Whatsapp Only",
        "lastMessageCheck": "7/30/18"
    },

    {
        "name": "Shagufta Bilal",
        "image": "3.jpg",
        "message": "glkj jdjg hh",
        "messageCheck": "seen",
        "phoneNumber": "032368587",
        "email": "shagi_bilal@gmail.com",
        "status": "#Zindagi",
        "lastMessageCheck": "7/20/18"
    }
]

function initialised()
{
    let chatBox =document.querySelector(".card");
  

    for(i=0;i<whatsappcontacts.length;i++)
    {
        let icon = '';
        if(whatsappcontacts[i].messageCheck === 'seen'){
            icon  = "'fas fa-check-double'";
        }
        else if(whatsappcontacts[i].messageCheck === 'sent'){
            icon = "'fas fa-check'"
        }
        else{
            icon = "'far fa-clock'"
        }

        
        chatBox.innerHTML +=
                            `   <a><div class="card-body list-group-item list-group-item-action" 
                                onclick="showUserDetail(${i})">
                                    <div class="user-img"  
                                    style="background-image: url(images/${whatsappcontacts[i].image})";>
                                    </div>
                                    <div class="user-info"> 
                                        <h6 class="user-name">
                                            ${whatsappcontacts[i].name}
                                        </h6>
                                        <p class="user-message">
                                            <i class=${icon}></i>  
                                            ${whatsappcontacts[i].message}
                                        </p>
                                    </div>
                                    <div class="user-last-seen">
                                        <p class="message-day">
                                        ${whatsappcontacts[i].lastMessageCheck}</p>
                                    </div>
                                </div></a>
                            `
    }
}


function showUserDetail(contacDetail)
{
    
    document.querySelector("#card-detail #show-image").style.backgroundImage = `url(images/${whatsappcontacts[contacDetail].image})`;
    document.querySelector("#card-detail #show-name.card-text span").innerHTML=`${whatsappcontacts[contacDetail].name}`;  
    document.querySelector("#card-detail #show-number.card-text span").innerHTML=`${whatsappcontacts[contacDetail].phoneNumber}`;  
    document.querySelector("#card-detail #show-email.card-text span").innerHTML=`${whatsappcontacts[contacDetail].email}`;           
    document.querySelector("#card-detail #show-status.card-text span").innerHTML=`${whatsappcontacts[contacDetail].status}`;                   
}