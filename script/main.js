/* 
 * Define The Elements 
 */
const _HTML = document.querySelector("html");
const root = document.querySelector("#root");
const footerBarSecond = document.querySelector("#footerBarSecond");
const footerBarFirst = document.querySelector("#footerBarFirst");
const googleSearchBtn = document.querySelector("#googleSearchBtn");
const feelingLuckyBtn = document.querySelector("#feelingLuckyBtn");
const searchbar = document.querySelector('.searchBar');
const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const keyboardANDvoiceSearch = document.querySelector(".keyboardANDvoiceSearch");
const btnGroup = document.querySelector(".btnGroup");
const locationBar = document.querySelector(".locationBar");
const languageChange = document.querySelector(".languageChange");

// Define all the texts
const ElementsTxt=[];

const gmailTxt = document.querySelector("#gamilLink");
ElementsTxt.push(gmailTxt);
const imageTxt = document.querySelector("#imagesLink");
ElementsTxt.push(imageTxt);
const signInBtn = document.querySelector("#signInBtn");
ElementsTxt.push(signInBtn);
ElementsTxt.push(googleSearchBtn);
ElementsTxt.push(feelingLuckyBtn);
const googleOfferedInTxt = document.querySelector("#languageChangeText");
ElementsTxt.push(googleOfferedInTxt);
const anotherLangTxt = document.querySelector("#theLanguage");
ElementsTxt.push(anotherLangTxt);
const locationTxt = document.querySelector("#locationName");
ElementsTxt.push(locationTxt);
const advertisingTxt = footerBarFirst.children[0];
ElementsTxt.push(advertisingTxt);
const businessTxt = footerBarFirst.children[1];
ElementsTxt.push(businessTxt);
const aboutTxt = footerBarFirst.children[2];
ElementsTxt.push(aboutTxt);
const howSearchWorksTxt = footerBarFirst.children[3];
ElementsTxt.push(howSearchWorksTxt);
const privacyTxt = footerBarSecond.children[0];
ElementsTxt.push(privacyTxt);
const termsTxt = footerBarSecond.children[1];
ElementsTxt.push(termsTxt);
const settingsTxt = footerBarSecond.children[2];   
ElementsTxt.push(settingsTxt);  

/*
 * Define Variables
 */

const LanguageTxet = {
    en: {
        language_name: "English",
        gmail: "Gmail",
        images: "Images",
        signIn: "Sign in",
        googleSearch: "Google Search",
        feelingLucky: "I'm Feeling Lucky",
        googleOfferedIn: " Google offered in:",
        anotherLang: "", // the another Language 
        location: "",
        advertising: " Advertising",
        business: " Business",
        about: " About",
        howSearchWorks : " How Search works",
        privacy: " Privacy",
        terms: " Terms",
        settings: " Settings",
        position:"right"
    },
    ar: {
        language_name: "العربية",
        gmail: "Gmail",
        images: "صور",
        signIn: "تسجيل الدخول",
        googleSearch: "بحت Google ",
        feelingLucky: "ضربة حظ",
        googleOfferedIn: " محرّك بحث Google متوفّر باللغة:",
        anotherLang: "", // the anather Language 
        location: "",
        advertising: "الإعلانات",
        business: "الأعمال",
        about: "حول",
        howSearchWorks : "آلية عمل \"بحث Google\"",
        privacy: "الخصوصية",
        terms: "البنود",
        settings: "الإعدادات",
        position:"left"
    }
};

// LanguageTxet[anotherlanguagePage].language_name;

var searchInputIsclicked = false;
var languagePage = "";
var anotherlanguagePage = "";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get the Location info
const getTheLocation = () => {
    let theLocation = {
            locationName: {
                en: "Palestine",
                ar: "فلسطين"
            },
            lat:  "",
            long: ""
        };     
    return theLocation;
}

// put the Location info in LanguageTxet obj
const displayTheLocation = () => {// not Done
    let locationName = getTheLocation().locationName;
    // yetDone
    let LanguageTxetKeys = Object.keys(LanguageTxet);
    LanguageTxetKeys.forEach((theLanguage) =>{
        LanguageTxet[theLanguage].location = locationName[theLanguage];
    });
}
displayTheLocation();

// change tha page language
const changeTheLanguage = (newlanguage="") => {
    newlanguage = newlanguage.trim().toLowerCase();
    let theLanguageSetting = LanguageTxet[newlanguage];
    if(theLanguageSetting != undefined ){ //make sure the language is exist
        if(newlanguage !== anotherlanguagePage){ //make sure the language is different
            let LanguageTxetValues = Object.values(theLanguageSetting);
            let i = 0;
            LanguageTxetValues.forEach((value) =>{
                if(i==0){
                    i++;
                    return;
                }
                else if([4,5].includes(i)){
                    ElementsTxt[i-1].value = value;
                }else if(i==7){
                    ElementsTxt[i-1].innerHTML = LanguageTxet[anotherlanguagePage].language_name;
                }else if(i==LanguageTxetValues.length-1){
                   //
                }else{
                    ElementsTxt[i-1].innerHTML = value;
                }
                i++;
            });
        }else{
            console.log("The page language is already '"+ newlanguage +"'");
        }
    }else{
        console.log("'"+languagePage.trim()+"' language is undefined");
    }
}

// set the initial language Page
const setInitLanguagePage = () =>{// not Done
    anotherlanguagePage = "ar";//
    changeTheLanguage("en");
    languagePage = "en";//
};
setInitLanguagePage();

// remove the shadow from the search bar
const removeShadow = (elements) => {
    elements.classList.add('noneShadow');
    elements.classList.remove('withShadow');
};

// add the shadow from the search bar
const addShadow = (elements) => {
    elements.classList.add('withShadow');
    elements.classList.remove('noneShadow');
};


/*
 * The Events
 */ 

// click on body
body.addEventListener('click', (event) =>{
    console.log(event);
    if(!(event.path[1] === searchbar || event.path[2] === searchbar)){// any place on body except search Bar
        searchInputIsclicked=false;
        removeShadow(searchbar);
    }
});

// click on Search Input
searchInput.addEventListener('click', (event) =>{
    searchInputIsclicked=true;
    addShadow(searchbar);
});

// Mouse over Search Bar
searchbar.addEventListener('mouseover', (event) =>{
    addShadow(searchbar);
});

// Mouse out Search Bar
searchbar.addEventListener('mouseout', (event) =>{
    if(! searchInputIsclicked )removeShadow(searchbar);
});

// change colorbtn when mousedown and mouseup
signInBtn.addEventListener('mousedown', (event) =>{
    signInBtn.classList.add('clickColor');
    signInBtn.classList.remove('nanclickColor');
});
signInBtn.addEventListener('mouseup', (event) =>{
    signInBtn.classList.remove('clickColor');
    signInBtn.classList.add('nanclickColor');
});
signInBtn.addEventListener('mouseout', (event) =>{
    signInBtn.classList.remove('clickColor');   
    signInBtn.classList.add('nanclickColor');
});

// on click anotherLang to Change the language
anotherLangTxt.addEventListener('click', (event) =>{
    let temp = anotherlanguagePage;
    anotherlanguagePage = languagePage;
    languagePage = temp;
    changeTheDir(LanguageTxet[languagePage].position);
    changeTheLanguage(languagePage);
});


// chang the dir fot the page
var keyboardArBtn = document.createElement("div");  
var keyboardArIcon = document.createElement("span"); 
const changeTheDir = (dir) => {
    if(dir == "right"){
        _HTML.lang = languagePage;
        //
        root.classList.add('right');
        root.classList.remove('left');
        //
        searchInput.dir="ltl";
        btnGroup.dir="ltl";
        locationBar.dir="ltl";
        btnGroup.dir="ltl   ";
        locationBar.dir="ltl";
        footerBarFirst.dir="ltl";       
        footerBarSecond.dir="ltl";     
        languageChange.dir="ltl";  
        //
        keyboardArBtn.parentNode.removeChild(keyboardArBtn);
        //

    }else{
        _HTML.lang = languagePage;
        //
        root.classList.add('left');
        root.classList.remove('right');
        //
        searchInput.dir="rtl";
        btnGroup.dir="rtl";
        locationBar.dir="rtl";
        btnGroup.dir="rtl";
        locationBar.dir="rtl";
        footerBarFirst.dir="rtl";       
        footerBarSecond.dir="rtl";    
        languageChange.dir="rtl";    
        //
        keyboardArBtn.classList.add('keyboardArBtn');
        keyboardArBtn.setAttribute('aria-label', 'keyboard');
       
        keyboardArIcon.id = "keyboardArIcon";

        keyboardArBtn.appendChild(keyboardArIcon);
        keyboardANDvoiceSearch.appendChild(keyboardArBtn);
        //
        
    }
    
};

