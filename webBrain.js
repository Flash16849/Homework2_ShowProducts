let container = document.getElementById("container");
let body = document.body;
body.style.display = "contents";
body.style.fontFamily = "Arial";

function buildHeader(){
    let header = document.createElement("div");
    header.style.backgroundColor = "black";
    header.style.width = "100%";
    header.style.height = "25px";
    header.style.padding = "10px 0 0 30px";
    header.style.fontSize = "14px";
    header.style.fontWeight = "bold";

    let headerNotice = document.createElement("a");
    headerNotice.href = "https://www.crocs.com.vn/en";
    headerNotice.text = "FREE SHIPPING for bills from 500,000vnd"
    headerNotice.style.color = "white";
    headerNotice.style.marginRight = "50%";

    let headerRegister = document.createElement("a");
    headerRegister.href = "https://www.crocs.com.vn/en/account/register";
    headerRegister.text = "REGISTER TO GET VND 100,000"
    headerRegister.style.color = "white";

    let headerSignin = document.createElement("a");
    headerSignin.href = "https://www.crocs.com.vn/en/account";
    headerSignin.text = "ACCOUNT"
    headerSignin.style.color = "white";
    headerSignin.style.paddingLeft = "50px";

    header.appendChild(headerNotice);
    header.appendChild(headerRegister);
    header.appendChild(headerSignin);

    return header;
}

function buildNavbar(){
    let navBar = document.createElement("div");
    navBar.style.display = "flex";
    navBar.style.backgroundColor = "white";
    navBar.style.borderColor = "black"
    navBar.style.borderStyle = "ridge";
    navBar.style.borderWidth = "thin"
    navBar.style.width = "100%";
    navBar.style.height = "70px";
    navBar.style.padding = "5px 10px 5px 30px";

    let logo = document.createElement("img");
    logo.src = "https://www.crocs.com.vn/cdn/shop/files/logo-no-tag_153x.png?v=1672210564";
    logo.style.height = "60px";
    logo.style.width = "150px";
    logo.style.paddingRight = "4%";
    navBar.appendChild(logo);

    let option = [
        "WOMEN",
        "MEN",
        "KIDS",
        "JIBBITZ™ CHARM",
        "FEATURE",
        "SALE"
    ];

    let optionBox = document.createElement("div");
    optionBox.style.display = "flex";
    optionBox.style.justifyContent = "space-between";

    for (let i = 0; i<option.length; i++){
        let optionButton = document.createElement("button");
        optionButton.innerHTML = option[i];
        optionButton.style.paddingRight = "5%";
        optionButton.style.backgroundColor = "white";
        optionButton.style.color = "black";
        optionButton.style.fontSize = "90%";
        optionButton.style.fontWeight = "bold";
        optionButton.style.border = "none";
        optionBox.appendChild(optionButton);
    }
    navBar.appendChild(optionBox);

    let searchBox = document.createElement("input");
    searchBox.style.marginLeft = "23%";
    searchBox.style.marginTop = "5px";
    searchBox.style.width = "350px";
    searchBox.style.height = "50px";
    searchBox.style.borderWidth = "thin";
    searchBox.style.borderColor = "black";
    searchBox.placeholder = "Search";



    navBar.appendChild(searchBox);
    

    let cart = document.createElement("img");
    cart.src = "https://theme.hstatic.net/200000067244/1000685399/14/cart.svg?v=3694";
    cart.style.width = "25px";
    cart.style.marginLeft = "1.5%";

    navBar.appendChild(cart);

    let icon_flag = document.createElement("img");
    icon_flag.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png";
    icon_flag.style.width = "28px";
    icon_flag.style.height = "18px";
    icon_flag.style.marginTop = "28px"
    icon_flag.style.marginLeft = "1%";
    navBar.appendChild(icon_flag);

    return navBar;
}

function buildBody(){
    let description = document.createElement("div");
    description.style.margin = "3%";


    let paragraph = document.createElement("div");
    let p1 = document.createElement("h3");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p2.style.fontSize = "17px";
    p3.style.fontSize = "20px";
    p3.style.textAlign = "right";

    p1.textContent = "COMFORT IN EVERY PAIR OF WOMEN'S CLOGS";
    p2.textContent = "From our classic clogs to patterned bistro clogs, you are sure to find a style you love.";
    p3.textContent = "View all 135 items";

    paragraph.appendChild(p1);
    paragraph.appendChild(p2);
    paragraph.appendChild(p3);


    description.appendChild(paragraph);
    return description;
}

function buildItemC(name, price, imgUrl, description){
    let itemCard = document.createElement("div");
    Object.assign(itemCard.style, {
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "width": "90%",
        "height": "90%",
        "margin": "auto",
        "text-align": "center",
        "font-family": "arial",
    });
    itemCard.innerHTML = `<img src=${imgUrl} alt="Denim Jeans" style="width:70%">
    <p style="padding-right: 2px; padding-left: 2px;">${name}</p>
    <h3>${price}</h3>
    <p>${description}</p>
    <p><button style="
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px">
    Add to Cart</button></p>`
   
    return itemCard; 
}

let itemName = ["Unisex Crocs Siren Clog", "Unisex Crocs Siren Clog", "Unisex Crocs Printed Clog",
            "Unisex Crocs Baya Clog", "Unisex Crocs Classic Clog", "Unisex Crocs Classic Clog", "Unisex Crocs Classic Clog",
            "Unisex Crocs Classic Skull Print Clog", "Unisex Crocs Classic Island Escape Clog", "Women's Crocs Baya Platform Printed Clog",
            "Women's Crocs Baya Platform Printed Clog", "Unisex Crocs Siren Clog"];

let price = ["2.395.000₫", "2.395.000₫", "1.595.000₫", "1.495.000₫", "1.495.000₫", "1.495.000₫", "1.495.000₫", "1.595.000₫",
            "1.595.000₫", "1.995.000₫", "1.995.000₫", "2.395.000₫"];

let img = ["https://www.crocs.com.vn/cdn/shop/files/208547-2Y2-1_720x.jpg?v=1688538972",
            "https://www.crocs.com.vn/cdn/shop/files/208547-001-1_720x.jpg?v=1688538356",
            "https://www.crocs.com.vn/cdn/shop/files/206230-0ZI-1_720x.jpg?v=1687242249",
            "https://www.crocs.com.vn/cdn/shop/files/10126-2V3-1_720x.jpg?v=1687241938",
            "https://www.crocs.com.vn/cdn/shop/files/10001-6WD-1_720x.jpg?v=1687241860",
            "https://www.crocs.com.vn/cdn/shop/files/10001-4NS-1_720x.png?v=1687490600",
            "https://www.crocs.com.vn/cdn/shop/files/10001-1LM-1_720x.jpg?v=1687229759",
            "https://www.crocs.com.vn/cdn/shop/files/208993-103-1_720x.jpg?v=1686728931",
            "https://www.crocs.com.vn/cdn/shop/files/208940-6WA-1_720x.jpg?v=1686728875",
            "https://www.crocs.com.vn/cdn/shop/files/208712-6J1-1_720x.jpg?v=1686728856",
            "https://www.crocs.com.vn/cdn/shop/files/208712-0ZI-1_720x.jpg?v=1686728842",
            "https://www.crocs.com.vn/cdn/shop/files/208547-6VZ-1_720x.jpg?v=1686728806"];


let itemList = document.createElement("div");
itemList.style.marginLeft = "30%"
itemList.style.display = "grid";
itemList.style.justifyContent = "space-between";
itemList.style.gridGap = "1rem";
itemList.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";



for(let i = 0; i<itemName.length; i++){
    let card = buildItemC(itemName[i], price[i], img[i], "Comfortable");
    itemList.appendChild(card);
}

let paragraph = document.createElement("div");
paragraph.style.padding = "20px";
paragraph.style.marginLeft = "30%";
paragraph.style.textAlign = "left";
let p1 = document.createElement("h3");
let p2 = document.createElement("p");
p2.style.fontSize = "17px";

p1.textContent = "Clogs for Women";
p2.textContent = "Whether you're looking to find a new pair of your most favorite Classic Clogs or you're looking for a new go-to pair of clogs with all the comfort you expect without compromising style - we've got the pair for you. Explore different styles including simple solid colors to animal print, find your perfect pair for any occasion or outfit - even find women's comfortable clogs to wear to work!";

paragraph.appendChild(p1);
paragraph.appendChild(p2);


let footer = document.createElement("div");
footer.style.backgroundColor = "black";
footer.style.width = "100%";
footer.style.height = "auto";
footer.style.fontWeight = "bold";

let footer1 = document.createElement("div");
footer1.style.color = "white";
footer1.style.height = "40px";
footer1.style.textAlign = "center";
footer1.style.padding = "2% 7% 2% 7%";
footer1.textContent = "JOIN CROCS CLUB & GET VND 100,000 OFF FOR YOUR FIRST PURCHASE";
footer.appendChild(footer1);

let footer2 = document.createElement("div");
footer2.style.borderStyle = "solid";
footer2.style.borderLeft = "none";
footer2.style.borderRight = "none";
footer2.style.borderWidth = "1px";
footer2.style.borderColor = "white";
footer2.style.padding = "2% 7% 2% 7%";

let account = document.createElement("a");
account.style.color = "white";
account.style.textDecoration = "none";
account.href = "https://www.crocs.com.vn/en/account";
account.textContent = "ACCOUNT";
account.style.marginRight = "10%";
footer2.appendChild(account);

let storeLocation = document.createElement("a");
storeLocation.style.color = "white";
storeLocation.style.textDecoration = "none";
storeLocation.href = "https://www.crocs.com.vn/en/pages/he-thong-cua-hang-crocs-vietnam";
storeLocation.textContent = "STORE LOCATOR";
storeLocation.style.marginRight = "10%";
footer2.appendChild(storeLocation);


let icon_flag = document.createElement("img");
icon_flag.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png";
icon_flag.style.width = "28px";
icon_flag.style.height = "18px";
icon_flag.style.marginTop = "28px"
icon_flag.style.marginLeft = "1%";
footer2.appendChild(icon_flag);
footer.appendChild(footer2);


// let footer3 = document.createElement("div");
// let footer4 = document.createElement("div");



let newHeader = buildHeader();
let newNavBar = buildNavbar();
let newBody = buildBody();
container.appendChild(newHeader);
container.appendChild(newNavBar);
container.appendChild(newBody);
container.appendChild(itemList);
container.appendChild(paragraph);
container.appendChild(footer);