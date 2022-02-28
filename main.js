fetch( "https://reqres.in/api/users?page=1" ,{method:"get"})
            .then((response)=>{
                return response.json();
            })
            .then((res)=>{
            console.log(res)

            res.data.forEach((element) => {

                var container=document.createElement("div");
                container.className="container";
                var img=document.createElement("img");
                img.className="img";
                img.src=element.avatar;

                var content=document.createElement("div");
                content.className="content";

                var span1=document.createElement("span");
                var label1=document.createElement("label");
                label1.append("ID:");
                var label2=document.createElement("label");
                label2.append(element.id);
                span1.append(label1,label2);

                var span2=document.createElement("span");
                var label3=document.createElement("label");
                label3.append("EMAIL:");
                var label4=document.createElement("label");
                label4.append(element.email);
                span2.append(label3,label4);

                var span3=document.createElement("span");
                var label5=document.createElement("label");
                label5.append("FIRST NAME:");
                var label6=document.createElement("label");
                label6.append(element.first_name);
                span3.append(label5,label6);

                var span4=document.createElement("span");
                var label7=document.createElement("label");
                label7.append("LAST NAME:");
                var label8=document.createElement("label");
                label8.append(element.last_name);
                span4.append(label7,label8);

                content.append(span1);
                content.append(span2);
                content.append(span3);
                content.append(span4);
                container.append(content);
                container.append(img);


                document.getElementById("body").append(container)


            });
        })
