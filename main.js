/*
    Author - Martin Yip
             martinyiptt@gmail.com

    Date   - April, 2018
    Verson 1.2  - Added 2015,14 Projects. Created function displayDefualtProject(year)

    Date   - Oct 31, 2017
    Verson 1.1  - Fix the issue where the video window is closed but still plays in background

    Date   - Aug 28, 2017
    Version 1.0
*/




var Project = function (year, projectId, projectName, members, detail, imgSrc, posterSrc, videoSrc){
    
    this.year = year;
    this.projectId = projectId;
    this.projectName = projectName;
    this.members = members;
    this.detail = detail;
    this.imgSrc = imgSrc;
    this.posterSrc = posterSrc;
    this.videoSrc = videoSrc;
}

Project.prototype.update = function() {
    
    document.getElementById("project"+ this.projectId + "-name").innerHTML = "Project:" + this.projectName;
    document.getElementById("project"+ this.projectId + "-member").innerHTML = "Members:" + this.members;
    

};

var currerntYear = 2017;

//  var project201xy = new Project("201x","y"," projectName", members","detail","imgSrc","posterSrc", "videoSrc");
//       x = year;
//       y = project number, from 0 - 9

/* project201xy = new Project("201x","y",
                    "projectName"
                    "members",
                    "detail",
                    "imgSrc",
                    "posterSrc", 
                    "videoSrc"); // Youtube link (embed link)
*/


//2017 Projects
var project20170 = new Project(2017,0,
                    "JiaJia 加加",
                    "CHOI, Wai Yu (HKUST), LI, Ruochen (HKUST), CHEN, Wei (CAA), WANG, Xiaoya (CAA)",
                    "Our product is JiaJia which means “Homie” in Chinese. JiaJia is a bowl that can be used. Fingerprints of each family member are engraved on the surface of the bowl. Light will be emitted through the fingerprint on the bowl to identify the person using the bowl.  Our product connects family members in different places in an unconscious way. By doing so, we remind users the presence and importance of family."
                    ,"pic/2017/JJ.JPG",
                    "poster/2017/JJ.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20171 = new Project(2017,1,
                    "Re-light",
                    "XU, Jiayi (HKUST), YUE, Xuanwu (HKUST), DOU, Hao (CAA), MA, Le (CAA),  WU, Xiaoyuan", 
                    "The inspiration of Re-light came from light refraction. We recreate a new product based on the lampshade which could re›fract light when rotating in different angles. We chose colored film instead of a lens to limit the size of Re-light, ensuring its weight and size are within acceptable llimits. Meanwhile, we noticed the problem of light pollution a hard nut to crack so we would like to provide the general public with another solution. As an auto-controlling light windows or screen, Re-light could help relieve light pollution by changing the form of light pollution instead of trying hard to resolve the problem by tracking the source of light pollution which is comparatively more difficult to do.",
                    "pic/2017/RL.JPG",
                    "poster/2017/RL.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20172 = new Project(2017,2,
                    "FLOWUID",
                    "LO, Kar Lam (HKUST), ZHANG, Rong (HKUST), GONG, Qiaolin (CAA), LUCK, Flavia Rosa (CAA), ZHANG, Limin (CAA)",
                     "Flowuid is a device thought to help people improve their health during their work routine. Its concept is based on POMODORO`s time management technique that recommends a 20-8-2 minutes work session in order to avoid body and mind stress. The time consists of 20 minutes work, 8 minutes doing another task, and 2 minutes of rest.Flowuid, unlike other devices in the market, is unintrusive with an interesting yet functional design that adapts to the office work enviroment.",
                     "pic/2017/F.JPG",
                     "poster/2017/F.pdf",
                     "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20173 = new Project(2017,3,
                    "Holocup 智能杯子",
                    "CHAN, Hiu Nam (HKUST), WANG, Yalin (HKUST), LI, Yana (CAA), ZHAN, Jie (CAA)", 
                    "People, especially office workers and children, don’t have a regular drinking water habit for sufficient water intake, and our product aims to attract people to drink more water, making the drinking process more interesting, and hence helping people develop a good water drinking habit. In order to make the drinking process interesting, an illusion is integrated into our cup. We utilize the reflection of light, to simulate a 3D holographic image, and the animation of the various marine animal pets collected will appear in the cup. Also, we design to connect the cup with a nurturing game by using Bluetooth, making it available on every phone. The cup, equipped with a weight sensor, will automatically sense and calculate the amount of water that you drunk. The more water you drink, the more complete the pet library.",
                    "pic/2017/HC.JPG",
                    "poster/2017/HC.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20174 = new Project(2017,4,
                    "Cupido 丘比特",
                    "KO, Ching Yuen (HKUST), YANG, Mingyuan (HKUST), NIU, Yifan (CAA), WANG, Hongdou (CAA)","Waiting love is a pair of bracelets made for long-distance lovers. It sends a message about missing each other implicitly.",
                    "pic/2017/C.JPG",
                    "poster/2017/C.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20175 = new Project(2017,5,
                    "Wolo",
                    "TSANG, Ka Lai (HKUST), YAU, Shuk Kwan (HKUST), LIN, Rong (CAA), WEN, Simei (CAA)",
                    "The product – WOLO consists of a pair of rings, a health detecting band, and a mobile app. The health detecting band is wearable on children while the rings are for parents. The mobile app enables parents to monitor their children’s health status remotely.",
                    "pic/2017/WL.JPG",
                    "poster/2017/WL.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20176 = new Project(2017,6,
                    "ARGUS",
                    "CAO, Shaozu (HKUST), PANG, Sui (HKUST), PENG, Bihua (CAA), ZHU, Mengyang (CAA)",
                    "We believe that people should be free from the worry of watching and navigation. We observe an increasing number of people focused on their phones when walking, and they need some warning beforehand to prevent any harm from objects on their path. Instead of advocating them not to use the phone, we take it as a fact and want to figure out the solution. That is how we end up designing a device to detect the environment, and notify the user before potential threats.",
                    "pic/2017/A.JPG",
                    "poster/2017/A.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20177 = new Project(2017,7,
                    "Weather Box",
                    "LEE, Geun Hyang (HKUST),FAN, Ka Yi (HKUST), QIAN, Hongxiang (CAA), SHAO, Minghui (CAA), WANG, Xiangli (CAA)",
                    "Weather is important in our daily lives. It affects both our physical well-being and mental health. Research has shown that adverse and unusual weather, climate changes annoy and depress people, and may lead to Seasonal Affective Disorder(SAD). The ‘Weather Box’ fetches and visualizes weather information in real-time to an entertaining LED light show to improve working efficiency.",
                    "pic/2017/WB.JPG",
                    "poster/2017/WB.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20178 = new Project(2017,8,
                    "SLight",
                    "LEE, Jae Hyung (HKUST), XU, Jiale (HKUST), WENG, Wuyue (CAA), XIANG, Qingqing (CAA)",
                    "SLight is a spine-like wall lamp that changes its shape according to user’s sitting posture to inform users whether they are sitting in good or bad posture. As SLight is a product that intends to remind people about their posture visually, it is designed as a human spine. Its dimension is 6 cm x 24 cm x 60 cm and it is divided into 26 layers of acrylic, similar to the number of presacral vertebrae, that can move right or left in order to simulate the spinal shape of a person sitting. Additionally, each layer contains 0.6mm thickness of cross-shaped half-transparent acrylic which has a square hole together with LED strip in the middle, 0.2mm thin black rectangular acrylic, and servo motors are placed behind and connected to some layers to generate horizontal movement. By having these structures in the design, SLight can emit light with LEDs on each layer and change the background shape through horizontal movements of the black rectangular acrylic.",
                    "pic/2017/S.JPG",
                    "poster/2017/S.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".



//2016 Projects

var project20160 = new Project(2016,0,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20161 = new Project(2016,1,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20162 = new Project(2016,2,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20163 = new Project(2016,3,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20164 = new Project(2016,4,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20165 = new Project(2016,5,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20166 = new Project(2016,6,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20167 = new Project(2016,7,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20168 = new Project(2016,8,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20169 = new Project(2016,9,
                    "",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "",
                    "pic/2016/.JPG",
                    "poster/2016/.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

//2015 Projects

var project20150 = new Project(2015,0,
                    "Air-T-Bag 氣囊龜龜包",
                    "Han Songfang (HKUST), Liu XinLu (HKUST), Shi Shuhui (CAA), Wu Ridong (CAA)",
                    "“Air-T-Bag” is an intelligent, special designed bag to protect the carrier from the harm of felling down. An Accelerate meter is contained to detect fall and will trigger air balloon to blow up immediately. The idea was borrowed from turtle’s ability of retrieving and extending its legs, which represented in the “T” in the product name. The coolest part of the Air -T-Bag is invisible balloon arms, which only reach out and held the carrier when he fells, just like turtle’s leg. The Air-T-Bag is not only portable, comfortable, stylist but also more importantly relief the pain of felling down. \n 氣囊龜龜包是一個為老人設計的智能背包，它的主要功能在於當老人將要摔倒過程中，快速彈出龜龜腿形狀的空氣囊，抱住老人以減輕老人摔倒時收到的傷害。從文獻來看，老人比年輕人更容易摔倒。而且由於老人骨質疏松，摔倒會嚴重的影響老年人的生活質量。氣囊龜龜包將有效減少摔傷得概率，讓老人不由擔心摔倒地行走在大地上。",
                    "pic/2015/ATB.JPG",
                    "poster/2015/ATB.jpg",
                    "https://www.youtube.com/embed/Hlx1Djx7HiM"); // Replace Youtube embed link here inside " ".



var project20151 = new Project(2015,1,
                    "Juice Do It",
                    "Hojeong Park (HKUST), Geyi Zhang (HKUST), Xijing Xu (CAA), Jun Lee (CAA)",
                    "’Juice Do It’ is an interactive, fun and convenient fitness product specially designed for the elderly. It is comprised of two very basic exercise equipments which make the elderly to exaggerate the juice making process. The motion is detected while the elderly is exercising and this allows the elderly to make a juice in the virtual world. Since the juice making process shows on the screen, was designed to be visually appealing and is like story telling, this will help the elderly to find boring and monotonous exercise, more interesting. \n\n 'Juice Do It' 是我們為老年人專門設計的一個具有交互性的，令人愉悅且便捷的運動裝置。這個裝置通過結合兩個最基本的運動器械，擴大了在榨汁這一過程中的肢體的運動幅度. 一旦老年人開始使用這個器械，裝置便會檢測到這個運動，並且在老年人眼前的屏幕上呈現出與其動作相對應的虛擬的果汁榨取流程。這種故事性的視覺傳達讓老年人的運動不再單調乏味，變得更加有趣。",
                    "pic/2015/JDI.JPG",
                    "poster/2015/JDI.jpg",
                    "https://www.youtube.com/embed/gpf2jToBnVU"); // Replace Youtube embed link here inside " ".

var project20152 = new Project(2015,2,
                    "Smart Walk 會走",
                    "Peter Sungsu Lim (HKUST), Silky Jain (HKUST), Anny Lee (CAA), Sherry Yuan (CAA)",
                    "Smart Walk innovates the new format of combining technology with art. It does not only focus on the walking habits and safety alert for the elderly but also indicates visually that slow walking is as beautiful as any other form of walking. Targeting the elderly, Smart Walk is a 3D printed shoe, designed to fixate a balanced walking approach. An alert system is fitted in the shoe for an individual to know when their foot is too tilted or imbalanced. Furthermore, if the elderly trips or hits a hard object, a trigger will be sent to their family members notifying them of a possible emergency. Smart Walk web application is accessible from anywhere for the elderly or their families to monitor their walking habits, momentum and angle. \n “會走”是科技與藝術的結合，它可以記錄老年人行走習慣並可以發出安全警報，同時也讓老年人更舒適更安全地行走。而針對老年人的行走習慣運用了3D打印技術的鞋旨在保持老年人行走時的平衡。警報系統則是安裝在鞋面，當偵測到老年人行走時有傾斜或者摔倒的情況時，警報器會發出警報。此外，如果老年人外出行走時發生意外，觸發器將會將警報發送至他們的家人。為此設計的APP也可以從任何地方調取老年人的行走習慣與數據。",
                    "pic/2015/SW.JPG",
                    "poster/2015/SW.jpg",
                    "https://www.youtube.com/embed/qA1y1ODsNyE"); // Replace Youtube embed link here inside " ".

var project20153 = new Project(2015,3,
                    "Memo-TV 記憶電視",
                    "Urvil Rakesh Sheth (HKUST), Naveep Pitipornvivat (HKUST), Ace Lin (CAA), Zhou Linwei (CAA)",
                    "Memo-TV is a technology combining modern software and antique hardware. It is aimed at the Elderly, to improve their memory and thus reduce the chances of getting dementia. It is a Television which can display information such as photos, videos, music, product and news headlines about Hong Kong and China, from 1915 to 2015. By simply turning two knobs in either direction, the year and channel (entertainment to video to news to product) can be changed. It is very user friendly and the Elderly can enjoy watching together with their family members as they recall past events. ”Recall your memory, share your story!”. \n Memo-TV是現代軟件和古董硬件技術的結合。它是針對老年人，幫助他們改善記憶，從而降低患老年癡呆癥的幾率。這個電視可以顯示來自香港和中國，1915年到2015年的照片,視頻,音樂,產品和新聞標題。通過簡單的兩個旋鈕旋轉，可以切換年份和頻道(娛樂，視頻，新聞和產品)。簡單友好的操作設計,讓老人可以更容易地和家人或朋友一起分享記憶，分享經驗。幫助老年人“找回記憶,分享故事!”。",
                    "pic/2015/MT.JPG",
                    "poster/2015/MT.jpg",
                    "https://www.youtube.com/embed/AoNynhPfAMY"); // Replace Youtube embed link here inside " ".

var project20154 = new Project(2015,4,
                    "Sound of Body 聲×體",
                    "Jimi Hongyu Chen, Joyce Jiayue Zheng, Kitty Waiyi Kwok, Sam Hongxiang Li",
                    "Collect heart beat, body temperature and movement condition of elderly, and then transform these physical data into real time music. Through the cooperation of instrumental and digital music, we hope to give youngster a feeling of listening to the inner heart of elderly and arouse their care about elderly. \n 測量老年人的心率，膚溫和運動等生理指標，並將其實時轉化成聲音信號播放出來。在實時播放過程中，通過電子音樂和樂器等配合，給年輕人一種聆聽老年人身心的感覺，從而激發他們愛老護老的情感。",
                    "pic/2015/SOB.JPG",
                    "poster/2015/SOB.jpg",
                    "https://www.youtube.com/embed/P1LnBp5ebgc"); // Replace Youtube embed link here inside " ".

var project20155 = new Project(2015,5,
                    "Shadow Play 耆影戲",
                    "Billy, Wing, Brandon, Avril",
                    "Times have changed. The happiness of elderly is now disappearing day by day. To save them out of boring live, we want to introduce some physical training machines into an interactive game, with a “Chinese shadow play” style. This is a multi-player “running” game. One player is going to control the directions using the slider and another will use the wheel for speeding up. To gain high marks, players need to corporate with each other very well instead of going their own way. In this game, we want to reform the shadow play, which is a well-known performance from elderly, into a new style. \n 耆，意思就是年長的人，而皮影戲是一種歷史悠久的民間藝術。時移勢易下，老人家往日的悠閒活動逐漸消失，他們的快樂也漸漸被剝削了。在計劃中，我們想透過融合一些老人家平常用到訓練器材跟合作性遊戲，以皮影戲為風格，塑造出只屬於他們的快樂 - 耆影戲。",
                    "pic/2015/SP.JPG",
                    "poster/2015/SP.jpg",
                    "https://www.youtube.com/embed/T-77xS-qODM"); // Replace Youtube embed link here inside " ".

var project20156 = new Project(2015,6,
                    "Beat Stick",
                    "Adityajian (HKUST), Yuan Tianjian (HKUST), Lv Jinwei (CAA), Hu lin (CAA)",
                    "Beat Stick is a health care stick designed for elderly who struggle with heart problem. As there is a heart sensor inside the stick connects to a LED light, which changes color according to heart rate of the elderly, the sensor can detect the heart situation of elderly. When there is a emergency heart problem such as “Heart attack”, “Coronary heart disease” happen suddenly, the elderly can take the pill from our stick easily since there is a pill box inside. Also, there is a GPS inside, which can be a good reference if the elderly have a severe pain and etc. Since there is a growing number of elderly in the world, a health care stick is necessary in order to help the elderly and their family. \n Beat Stick是專門為心臟不好的老人設計的一款個人健康護理拐杖。拐杖內部設有感應器，能夠實時監測老人的心臟狀況，感應器連接LED燈，會隨著不同的健康狀況出現不同顏色的燈光，以可視化的形式直觀展現老人的心臟健康狀況。當老人身體不適時，可以打開拐杖內的應急藥盒做緊急處理。如果狀況較為嚴重，按下拐杖內的緊急按鈕，拐杖內的GPS系統可以將老人現有的位置信息發送給家人，及時就醫診治。老人的身體狀況日漸衰弱，即便是家人也不能隨時陪伴在身旁，這一款健康護理拐杖可以幫助家人及時照看老人的身體狀況。",
                    "pic/2015/BS.JPG",
                    "poster/2015/BS.jpg",
                    "https://www.youtube.com/embed/lgxG4nTqO0s"); // Replace Youtube embed link here inside " ".

var project20157 = new Project(2015,7,
                    "Cog Matcher 拍拍樂",
                    "Li Jiewei (HKUST), Wei Yue (HKUST), Wang Yucheng (CAA), XU Jiaxin (CAA)",
                    "‘Cog Matcher’ is an interactive cognitive training game specially designed for elderly against cognitive aging and memory loss. During the game, short animations of many activities in elderly’s daily life (like teeth brushing or playing Majiang) with show up accompanied by melodic sounds. In front of the player, there will be several different pencil drawings. Players need to find out and pat on the right drawing which is related to this activity (for example, a picture of toothbrush for teeth brushing). By finishing this game, all the sound will add up into an interesting melody which derives from elderly’s daily life. It both fun and benefit for elderly’s cognitive training. \n 拍拍樂是一款專門為長者定制，可以預防認知衰老與記憶減退的互動遊戲機。遊戲過程中，墻面上會呈現一些配有音效的小動畫，動畫裏都是一些長者經常會遇到的生活場景（比如刷牙、打麻將等等）。同時在玩家面前的桌上，會擺放一些鉛筆繪制的圖片。玩家需要從中找出並拍打（或觸摸）與墻上的動畫對應的鉛筆圖。每次回答正確，遊戲就會進入下一個環節，播放一個新的動畫，並增加新的音效。一直到完成一組（7個）任務，所有的音效會組成一首有趣的完整曲子。這個遊戲既可以單人玩也可以與家人一起玩，既有趣又可以鍛煉大腦認知能力。",
                    "pic/2015/CM.JPG",
                    "poster/2015/CM.jpg",
                    "https://www.youtube.com/embed/QDGIFOJK-SE"); // Replace Youtube embed link here inside " ".

var project20158 = new Project(2015,8,
                    "Grasp 握心",
                    "Brent (HKUST), Martin (HKUST), Rainy (CAA), Tina (CAA)",
                    "“Grasp” is an interactive installation to let the elderly to share and the young to listen and vice versa. There are many untold stories from the elderly who experienced diverse life stories. Some old pals are eager to share them which the young worth learning from. An open communication is triggered by holding hand and is such an easy thing. We usually cannot count how many people we have held hands with over the years. Holding hands is one of the most casual, yet simultaneously intimate physical acts. We wish the audience will hold their elders’ hands to listen their stories after holding this hand. \n 老年人喜歡與人分享自己的故事，而現在的年輕人卻已不願傾聽他們的訴說，我們希望通過這個裝置，讓年輕人看到老年人想要訴說的迫切心情，在這位“老人”緊握觀眾的手訴說時，觀眾會有所感觸，回到家中，也會握住長輩的手，聽聽他們的故事。",
                    "pic/2015/G.JPG",
                    "poster/2015/G.jpg",
                    "https://www.youtube.com/embed/Rklox0H3x90"); // Replace Youtube embed link here inside " ".

var project20159 = new Project(2015,9,
                    "Era Link",
                    "Lam Jing Fung (HKUST), Lau Kin Hang (HKUST), Wang Zian (CAA), Yang Minwei (CAA)",
                    "The ultimate goal of Era Link is to encourage elderly assimilating into society. Through the process, elderly are required to hold their hands together and cooperate with another to overcome different level of maze game. The game basically controlled by the body gesture and the balancing technique which directly detected by Kinect dynamic device. We expect elderly are curious about our product and try to learn it without any instruction. Hopefully the older generation can enjoy learning something new and exercise through the process. At last elderly can receive a surprise which symbolizes younger generation’s thought. \n 我們的產品希望讓老一輩透過手牽手的互動,令老人不但享受於遊戲,同時從中自主學習如何使用產品,更通過動感遊戲讓老人家有適當的運動。透過此產品,我們亦希望令老人有小驚喜,同時表達年青一輩的心意。",
                    "pic/2015/EL.JPG",
                    "poster/2015/ELink.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".



//2014 Projects

var project20140 = new Project(2014,0,
                    "Invisible hand 無形之手",
                    "Chen Qing (HKUST), Wang Yun (HKUST), Qiu Yuan (CAA), Wang Zhipeng (CAA)",
                    "“Invisible Hand” is an immersive, interactive audio visual installation which presents various items of news from the Internet, and in particular junk information on social media. With the help of Leap Motion, the participant is able to explore the information universe interactively. The invisible hand not only acts as the representation of the participant’s hand in this interaction process, but also offers the unique opportunity of intervention and control of the virtual environment. This provides a new perspective to speculating about online social networks.",
                    "pic/2014/IH.JPG",
                    "poster/2014/IH.jpg",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".

var project20141 = new Project(2014,1,
                    "Give me your face",
                    "Leung Ka Kit (HKUST), Leung Ka Yan (HKUST), Li Chen Ning (CAA), Hu Rong  (CAA)",
                    "The ultimate idea of our product is to utilize our facial expressions to achieve different operations in our daily lives. We have chosen to emphasize the most important and inevitable part of our lives, which is a smile to be the core of our project. The final product is a mirror, through which we can use different types of smile to generate several types of feedback that include messages and images. The goal is to encourage users to adopt a genuine smile and then use this gesture to make lively conversation with the mirror. \n 人的表情是最天然的表達，我們選取了人類最重要的表情──笑容，作為這次的主題。如果我們把它當作是人發出的最直接的信號，那又會是怎樣呢？所以我們設計了一面鏡子，一面能懂你的鏡子。你微笑，他會懂；你沉默，它也會懂；並給予你回饋。通過這面鏡子，我們可以用簡單的笑容作為指令，發出不同的反饋，當中包括各種相關的句子和圖片。透過這件產品，希望可以鼓勵大家樂觀地過每一天。",
                    "pic/2014/GMYF.JPG",
                    "poster/2014/GMYF.jpg",
                    "https://www.youtube.com/embed/vPQ40azWXoc"); // Replace Youtube embed link here inside " ".

var project20142 = new Project(2014,2,
                    "Crazy Face",
                    "Xiong Lei (HKUST), Zeng Cancheng (HKUST), Chen Kai Song (CAA), Hu Heng Zhi (CAA)",
                    "Our product is an interactive video game using our facial expressions. In our game, human face will be detected and the corresponding face model will be shown on the screen. Monsters will attack our face and we can use our facial expressions to defend our face. For example, we can use our eyebrow to bounce monsters off and use our mouth to eat monsters.",
                    "pic/2014/CF.JPG",
                    "poster/2014/CF.jpg",
                    "https://www.youtube.com/embed/kOrftkvJr_A"); // Replace Youtube embed link here inside " ".

var project20143 = new Project(2014,3,
                    "Muse 曳",
                    "Cheng Xuran (HKUST), Fu Yunfei (HKUST), Huang Hao (CAA), Li Yu Tong (CAA)",
                    "Although the swimming posture of a fish is beautiful, it currently lacks sound. Therefore, we have combined the unique swimming movements of a fish with music and images in order to express more inspiration. We think that a number of images of moving fish could be combined with music to produce the sound of a current band. In this way, music and art combine as the fish move. \n 儘管魚兒遊動的姿勢很美，但卻是無聲的。因此，我們將魚的遊動與音樂、美術結合起來，賦予它們更多的靈性，使其在遊動的過程中奏曲。",
                    "pic/2014/M.JPG",
                    "poster/2014/M.jpg",
                    "https://www.youtube.com/embed/85BbFrZUo2"); // Replace Youtube embed link here inside " ".

var project20144 = new Project(2014,4,
                    "Wall 牆",
                    "Ni Feng (HKUSWT), Wang Bangyun (HKUST), Fu Dong Ting (CAA), Wang Zheng Ying (CAA)",
                    "This is a piece of artwork which is an interactive installation and originally inspired by the structure of a soft robot. This object is a complex structure which features high flexibility and a moldable shape. The original concept of this work is to integrate features of our actual physical life into mechanical structures, for example, the notion of breathing. We have constructed a wall that is flexible and simulates the act of inhaling and exhaling air. Our goal is that this breathing wall can interact with people. Using silicone gel as the raw material, we molded nine isolated units and each has the function of sensing the heartbeat and synchronizing the beat by air inflation-deflation process of the gel chamber. Through the virtual representation of the heartbeat, a person can focus and listen to the pulse of the wall. We hope that this will relieve any stress that they might have and in this way, they will then feel relaxed. We hope this installation can bring an empathetic interaction to users by allowing them to merge into it. \n 作為一個互動裝置，【牆】的靈感源自軟體機器人的結構與特性：靈活柔軟以及高可塑性。作品的以將生命感注入機械結構為概念，以一面能夠“呼吸”的互動牆為展現。【牆】由九個獨立的可充氣放氣單元構成，每個單元均由翻模矽膠鑄造並連接成一體。裝置的操作端為心率感測器，心率被輸入以及被同步到牆面，並開始“跳動”。我們希望觀眾能夠專注于自己的心跳與牆面的律動從而得到通感，一裝置融為一體。",
                    "pic/2014/W.JPG",
                    "poster/2014/W.jpg",
                    "https://www.youtube.com/embed/VMK4MKylikk"); // Replace Youtube embed link here inside " ".

var project20145 = new Project(2014,5,
                    "Pulse of Life",
                    "Wu Wenchao (HKUST), Zheng Yixian (HKUST), Shao Lin (CAA), Wang Hongrun (CAA)",
                    "The storage of social media data that makes up a large part of the fabric of modern life can be likened to the storage of food in a fridge. We have constructed the “Super Fridge” based on this notion and we hope to illustrate the pulse of contemporary life of our generation with social media from different aspects. The goal is to present a unique combination of data visualization techniques and contemporary art in the format of an exciting tour of current social media. \n 社交網路記錄著現代生活的點滴，就如同冰箱存儲著不同食物。本專案設計製作的“超級冰箱”，結合資料視覺化技術與當代藝術，在當下大資料時代中，打造一種完美展現資料生活律動的創意載體，以嶄新的方式、從多個角度為您展示身邊的社交網路資料。",
                    "pic/2014/POL.JPG",
                    "poster/2014/POL.jpg",
                    "https://www.youtube.com/embed/bPnVciLSxZw"); // Replace Youtube embed link here inside " ".

var project20146 = new Project(2014,6,
                    "Touch and Feel",
                    "Lam Wai Ming (HKUST), Tsui Ka Lok  (HKUST), Lang Fang Yi (CAA), Zhang Jiale (CAA)",
                    "The idea of our product comes from the word ”sense”. Senses sometimes are intangible, we, however, want to make it tangible. In our display, Visitors will be stimulated by the attack of LED light panel when they watch the violent video clip form the screen. Our goal is to make a feedback system to promote the message of anti-violence. \n 我們作品的概念源自一個字”感”，感官的刺激在我們日常生活中無處不在，但很多時這些都無影無蹤，但我們就是想把這些東西變成真實可見的。在我們的產品中，當來賓看到一些暴力視頻，LED燈就會給你刺眼的燈光。而我們想帶出反暴力的訊息。",
                    "pic/2014/TAF.JPG",
                    "poster/2014/TAF.jpg",
                    "https://www.youtube.com/embed/kmjH5M3Qsz4"); // Replace Youtube embed link here inside " ".

var project20147 = new Project(2014,7,
                    "Vine tune",
                    "Shum Ka Yi  (HKUST), Jing Donger (HKUST), Liu Ai Qing (CAA), Pan Si Bo (CAA)",
                    "The final design of the project is to create an installation art, combining both a real and virtual plant. The installation art is embedded with 2 sensors which focus on air quality and light. When there is bright light shining on the pot, the plant would grow upwards demonstrating the abundance of natural light which is vital for its growth. For air quality, when the ambient environment is poor, the plant would shrink back into its pot, showing the influence of the environment to the plant. \n 這專案是一個裝置藝術，結合真實跟虛擬的植物。這藝術品結合了兩個感測器，包括光感測器跟空氣感測器。如果周邊的亮度很高，那植物就會升高，模擬在現實環境中植物對應光線的生長情況。另一個感測器，就是空氣感測器，用於感應後邊的空氣素質。如果周邊的空氣不好，那植物就會萎縮，返回原本的花盆。",
                    "pic/2014/VT.JPG",
                    "poster/2014/VT.jpg",
                    "https://www.youtube.com/embed/usLG4nwzHB0"); // Replace Youtube embed link here inside " ".

var project20148 = new Project(2014,8,
                    "Surp-rise! 多元喚醒",
                    "Lai Cherry Chun Yee (HKUST), Mok Lai Ying (HKUST), Liao Jia Xin (CAA), Lin Wei Peng (CAA)",
                    "Surp-rise lets users wake up in a less frenetic and more peaceful way. Most people currently use an alarm to wake them up at the correct time, and this loud noise affects their quality of sleep, making them feel stressed. In our project, there are 3 new approaches i.e., smell, vision and sound, to ensure that users are not stressed when they actually have to wake up. With a customization function, users can choose various components according to their own needs. These can allow them to wake up using different applications but the end goal is to achieve a calm and tranquil start to the day. \n 多元喚醒，是一個從不同感觀: 視、聽、嗅覺喚醒人的生活小夥伴。於用戶自定義功能，用家可選擇不同場景組合，擁有不同體驗令生活加添色彩，為每天開始作最好的前奏。",
                    "pic/2014/SR.JPG",
                    "poster/2014/SR.jpg",
                    "https://www.youtube.com/embed/TNb5njxRkBQ"); // Replace Youtube embed link here inside " ".

var project20149 = new Project(2014,9,
                    "Dish detector",
                    "Cheng Yui Hing (HKUST), Han Tianwei (HKUST), Feng Wei Wei (CAA), Tao Ran (CAA)",
                    "Interviews with blind people show that they have real difficulty in actually locating an object that has been placed on, for example, a table. The object may be a dish and we have specifically designed this for our project. \n 在採訪中盲人朋友向我們講述了他們在就餐時很難確定餐盤的位置。我們的餐具檢測儀使筷子在碗的上方時會發出輕微響聲。盲人在用餐時可以通過聲音輕鬆確定桌子上餐盤的位置，從而輕鬆就餐。",
                    "pic/2014/DD.JPG",
                    "poster/2014/DD.jpg",
                    "https://www.youtube.com/embed/HCDkRV6pTTo"); // Replace Youtube embed link here inside " ".

/*
    Add projects to an array. Each array represents a year.

    projects201x = [project201x0,project201x1,project201x2,project201x3,project201x4,project201x5,project201x6,project201x7,project201x8];
*/
var projects2017 = [project20170,project20171,project20172,project20173,project20174,project20175,project20176,project20177,project20178];
var projects2016 = [];
var projects2015 = [project20150,project20151,project20152,project20153,project20154,project20155,project20156,project20157,project20158,project20159];
var projects2014 = [project20140,project20141,project20142,project20143,project20144,project20145,project20146,project20147,project20148,project20149];
var projects2013 = [];




/*
    When users clicks the Year in page2
*/
function displayProject(evt){
    
    //evt.target.id = summer201x
    var yearId = evt.target.id;

    //get last char of 201x
    var year = yearId.slice(-4,-1) + yearId.slice(-1);
    
    var projectYear = toProjectsYear(year);
    document.getElementById("project-year").innerHTML = "Summer " + year +  " HKUST VIDEO";
    document.getElementById("video-year").innerHTML = "Summer " + year;
    changeYearColor(year);
    
     for(var i = 0; i < projectYear.length; i++){
         projectYear[i].update();
     }
     displayDefualtProject(year);
}

/*
    When users clicks the project name in page 2
*/
function displayDetail(evt){


    //Get project ID 
    var projectEvtId = evt.target.id;
    var projectId  = projectEvtId.slice(7,8);
   
    //Get the specfic project as an object
    var project = toProject(currerntYear, projectId);

    //Change the selected project's color
    changeProjectColor(projectId);

    //Change the detail container's info to the selected project's detail

    //Change the project name for the detail container and the video container.
    document.getElementById("project-detail-name").innerHTML = project.projectName;
    //Change detail's text
    document.getElementById("project-detail-text").innerHTML = project.detail;
    //Change image
    document.getElementById("project-detail-img").src = project.imgSrc;
     //Change poster's link
    document.getElementById("a-poster-href").href = project.posterSrc;

    //Change the project name for the video container.
    document.getElementById("project-video-name").innerHTML = project.projectName;
     //Change the project members for the video container.
    document.getElementById("project-video-members").innerHTML = project.members;
     //Change the project video youtube link for the video container.
    document.getElementById("iframe-project-video").src = project.videoSrc;
}

/*
    When users clicks the year in page 2. Show defualt project.
*/
function displayDefualtProject(year){

    changeProjectColor(0);

     switch (year) {
        case '2017':
            document.getElementById("project-detail-name").innerHTML = project20170.projectName;
    		document.getElementById("project-detail-text").innerHTML = project20170.detail;
    		document.getElementById("project-detail-img").src = project20170.imgSrc;
    		document.getElementById("a-poster-href").href = project20170.posterSrc;
    		document.getElementById("project-video-name").innerHTML = project20170.projectName;
    		document.getElementById("project-video-members").innerHTML = project20170.members;
    		document.getElementById("iframe-project-video").src = project20170.videoSrc;
    		document.getElementById("project9-name").style.visibility = 'hidden';
            document.getElementById('project9-member').style.visibility = 'hidden';
    		break;
        //case '2016':
        case '2015':
            document.getElementById("project-detail-name").innerHTML = project20150.projectName;
    		document.getElementById("project-detail-text").innerHTML = project20150.detail;
    		document.getElementById("project-detail-img").src = project20150.imgSrc;
    		document.getElementById("a-poster-href").href = project20150.posterSrc;
    		document.getElementById("project-video-name").innerHTML = project20150.projectName;
    		document.getElementById("project-video-members").innerHTML = project20150.members;
    		document.getElementById("iframe-project-video").src = project20150.videoSrc;
    		document.getElementById("project9-name").style.visibility = 'visible';
            document.getElementById('project9-member').style.visibility = 'visible';
    		break;
        case '2014':
            document.getElementById("project-detail-name").innerHTML = project20140.projectName;
    		document.getElementById("project-detail-text").innerHTML = project20140.detail;
    		document.getElementById("project-detail-img").src = project20140.imgSrc;
    		document.getElementById("a-poster-href").href = project20140.posterSrc;
    		document.getElementById("project-video-name").innerHTML = project20140.projectName;
    		document.getElementById("project-video-members").innerHTML = project20140.members;
    		document.getElementById("iframe-project-video").src = project20140.videoSrc;
    		document.getElementById("project9-name").style.visibility = 'visible';
            document.getElementById('project9-member').style.visibility = 'visible';
            
        //case '2013':
           
        default:
            return projects2017;
    }

}



/*
    Show the container that containes (id = "container-project-video" ) the selected project's video
*/
function showProjectVideo(evt){

    document.getElementById("container-project-video").style.visibility = 'visible';
}

/*
    Close the video container (id = "container-project-video" ) when the uses clicks the close button or 'projects →'

    Version 1.1
        -Also delete the video link, so it will stop playing in the background

*/
function closeProjectVideo(evt){

    document.getElementById("container-project-video").style.visibility = 'hidden';
    document.getElementById('iframe-project-video').src='';
}
   

//change text color
function changeYearColor(year){
    
    /*
        Change the color of that year when the specfic year is choosen
    */
   
    //set all year to the original color
    document.getElementById("summer2017").style.color = "#655500";
    document.getElementById("summer2016").style.color = "#655500";
    document.getElementById("summer2015").style.color = "#655500";
    document.getElementById("summer2014").style.color = "#655500";
    document.getElementById("summer2013").style.color = "#655500";

    //set the selected year to white
    document.getElementById("summer" + year).style.color = "white";
    
}

/*
    Change the color of that project when the specfic project is choosen
*/
function changeProjectColor(projectId){

    //set all project color to original color
    document.getElementById("project0-name").style.color = "#f7931e";
    document.getElementById("project1-name").style.color = "#f7931e";
    document.getElementById("project2-name").style.color = "#f7931e";
    document.getElementById("project3-name").style.color = "#f7931e";
    document.getElementById("project4-name").style.color = "#f7931e";
    document.getElementById("project5-name").style.color = "#f7931e";
    document.getElementById("project6-name").style.color = "#f7931e";
    document.getElementById("project7-name").style.color = "#f7931e";
    document.getElementById("project8-name").style.color = "#f7931e";
    document.getElementById("project9-name").style.color = "#f7931e";
    
    
    //set the seleted project to purple
    document.getElementById("project"+ projectId + "-name").style.color = "#662d91";

}


/*
    Get the string year, int project id (such as 2017,1 )
    to indentify each individual project.
    Return object project in year array
*/
function toProject(year,projectId){
 
    switch (year) {
        case 2017:
            return projects2017[projectId];
        case 2016:
            return projects2016[projectId];
        case 2015:  
            return projects2015[projectId];
        case 2014:
            return projects2014[projectId];
        case 2013:
            return projects2013[projectId];
        default:
            return projects2017[projectId];
    }
}

/*
    Get the string year
    Return the year array
*/
function toProjectsYear(year){
    
    switch (year) {
        case '2017':
            currerntYear = 2017;
            return projects2017;
        case '2016':
            currerntYear = 2016;
            return projects2016;
        case '2015':
            currerntYear = 2015;
            return projects2015;
        case '2014':
            currerntYear = 2014;
            return projects2014;
        case '2013':
            currerntYear = 2013;
            return projects2013;
        default:
            return projects2017;
    }
}


//display 2017 projects first
function onCreate(){
    
    changeYearColor(2017);
    for(var i = 0; i < projects2017.length; i++){
        projects2017[i].update();
     }

    changeProjectColor(0);
    document.getElementById("project-detail-name").innerHTML = project20170.projectName;
    document.getElementById("project-detail-text").innerHTML = project20170.detail;
    document.getElementById("project-detail-img").src = project20170.imgSrc;
    document.getElementById("a-poster-href").href = project20170.posterSrc;
    document.getElementById("project-video-name").innerHTML = project20170.projectName;
    document.getElementById("project-video-members").innerHTML = project20170.members;
    document.getElementById("iframe-project-video").href = project20170.videoSrc;
    document.getElementById("project9-name").style.visibility = 'hidden';
    document.getElementById('project9-member').style.visibility = 'hidden';

    
}

document.addEventListener('DOMContentLoaded', init, false);


function init(){
    
onCreate();

//Set event listener the courses for each year.
var el = document.getElementById("summer2017").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2016").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2015").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2014").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2013").addEventListener("click", displayProject,true);

//Set event listener for each courses on the selected year by project ID ( 0 - 9 ).
var el = document.getElementById("project0-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project1-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project2-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project3-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project4-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project5-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project6-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project7-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project8-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project9-name").addEventListener("click", displayDetail,true);



//Set event listener on the video link under project detail. Which will be used for showing "container-project-video".
var el = document.getElementById("project-video-link").addEventListener("click", showProjectVideo,true);

//Set event listener on the close button and "back to projects" under project-video container.
var el = document.getElementById("projects-link").addEventListener("click", closeProjectVideo,true);
var el = document.getElementById("close-button").addEventListener("click", closeProjectVideo,true);
    
}
