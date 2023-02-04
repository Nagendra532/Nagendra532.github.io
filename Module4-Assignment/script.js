var names=new Array();
names[0]="Nag";
names[1]="nuthan";
names[2]="siv";
names[3]="vamsi";
names[4]="ram";
names[5]="nagendra";
names[6]="gopisetty";
names[7]="nuthan";
names[8]="prasad";
names[9]="varun";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}