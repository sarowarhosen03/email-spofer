var typed = new Typed('.welcome', {

   strings: [" Am Shuvo ☺️", "You're welcome to email spofer"],

   typeSpeed: 150,

   backSpeed: 130,

   loop: 30000

});

function sendEmail() {

   

   

   $(".btn").val(".....");

      Email.send({

        Host: "smtp.gmail.com",

        Username: "shaw2585433@gmail.com",

        Password: "awtglqlvjgkfjfsf",

        To: $(".to").val(),

        From: $(".from").val(),

        Subject: $(".subject").val(),

        Body: $(".message").val(),

      }).then(

      (message) => {alert("mail sent successfully")

         

         

         $(".btn").val("send");

         

      }

      );

    }

     

