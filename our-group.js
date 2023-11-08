let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList() {

        this.students.forEach( (student)=> {

            console.log(this.title + ": " + student

            );

        });

    }

};

//group.showList();

// 1. Wrapper 1
const res= ()=>group.showList();
res();
// 2. wrapper 2
const res1 = function (){
    group.showList();
}
res1();

//3. binding
 const res2 = group.showList.bind(group);
 res2();

 //4. call + wrapper

 const res3 = ()=>group.showList.call(group);
 res3();

 //5. apply + wrapper

 const res4 = ()=>group.showList.apply(group);
 res4();
