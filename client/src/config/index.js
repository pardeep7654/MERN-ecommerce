export const registerFormControls = [
  {
    name: "name",
    label: "Name",
    placeholder: "enter your name",
    componentType: "input",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "enter your phone no.",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Entet your password",
    componentType: "input",
    type: "password",
  },
];
export const loginFormControls = [
  {
    name: "email",
    componentType: "input",
    label: "Email",
    placeholder: "enter your email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "enter your password",
    type: "password",
    componentType: "input",
  },
];

export const productFormElements=[
  {
    label:"Title",
    name:"title",
    componentType:"input",
    type:"text",
    placeholder:"Enter Product title"
  },
  {
    label:"Description",
    name:"description",
    componentType:"textarea",
    placeholder:"Enter Product description"
  },
  {
    label:"Category",
    name:"category",
    componentType:"select",
    options:[
      {id:"men",label:"Men"},
      {id:"women",label:"Women"},
      {id:"kids",label:"Kids"},
      {id:"accessories",label:"Acessories"},
      {id:"footwear",label:"Footwear"}
    ]
  },
  {
    label:"Brand",
    name:"brand",
    componentType :"select",
    options:[
      {id:"nike",label:"Nike"},
      {id:"adidas",label:"Adidas"},
      {id:"puma",label:"Puma"},
      {id:"levi",label:"Levi"},
      {id:"zara",label:"Zara"},
      {id:"h&m",label:"H&M"}
    ]
  },
  {
    label:"Price",
    name:"price",
    componentType:"input",
    type:"number",
    placeholder:"Enter product price"
  },{
    label:"Sale Price",
    name:"salePrice",
    componentType:"input",
    type:"number",
    placeholder:"Enter Sale Price(Optional)"
  },
  {
    label:"total Stock",
    name:"totalStock",
    componentType:"input",
    type:"number",
    placeholder:"Enter Total Stock"
  }
]