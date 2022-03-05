import React from 'react'

const icons = [
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.39063 25.5391C3.39063 25.9922 3.75784 26.3595 4.21094 26.3595H14.3273C12.886 24.944 11.657 23.2801 11.657 21.2389C11.657 18.5904 13.6245 16.5157 16.1367 16.5157C17.143 16.5157 17.9967 16.8682 18.6944 17.4012C17.1161 14.6318 14.0098 12.8465 10.4955 13.3065C6.36362 13.8476 3.39062 17.5849 3.39062 21.7518L3.39063 25.5391Z" fill="#FF7D23"/>
    <path d="M11.5938 11.5938C14.765 11.5938 17.3359 9.0228 17.3359 5.85156C17.3359 2.68033 14.765 0 11.5938 0C8.42252 0 5.85156 2.68033 5.85156 5.85156C5.85156 9.0228 8.42252 11.5938 11.5938 11.5938ZM11.6667 8.86667C12.12 8.86667 12.12 8.86667 11.6667 8.86667C10.7622 8.86667 11.6667 9.77115 11.6667 8.86667C12.5711 8.86667 11.6667 9.77115 11.6667 8.86667C11.1482 8.86667 11.2134 8.86667 11.6667 8.86667C12.12 8.86667 12.1333 8.86667 11.6667 8.86667C11.6667 10.6763 13.4034 9.13281 11.5938 9.13281C9.78415 9.13281 11.6667 10.6763 11.6667 8.86667C11.2134 8.86667 11.2134 8.86667 11.6667 8.86667Z" fill="#FF7D23"/>
    <path d="M18.9766 20.6163V20.618L18.9757 20.6155C18.7162 19.7022 17.8262 18.1562 16.1367 18.1562C14.5185 18.1562 13.2976 19.4814 13.2976 21.2388C13.2976 23.8826 16.4708 26.0364 18.4438 27.8037C18.5976 27.9344 18.7867 28 18.9766 28C19.1665 28 19.3555 27.9344 19.5093 27.8037C21.4734 26.0445 24.6555 23.8848 24.6555 21.2388C24.6555 19.4811 23.4347 18.1562 21.8165 18.1562C20.1357 18.1562 19.2425 19.6975 18.9766 20.6163Z" fill="#FF7D23"/>
  </svg>,
  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.83334 5.33333C5.83334 8.27885 7.92268 10.6667 10.5 10.6667C13.0773 10.6667 15.1667 8.27885 15.1667 5.33333C15.1667 2.38781 13.0773 0 10.5 0C7.92268 0 5.83334 2.38781 5.83334 5.33333ZM17.5 10.667C17.5 12.8761 19.067 14.667 21 14.667C22.933 14.667 24.5 12.8761 24.5 10.667C24.5 8.45785 22.933 6.66699 21 6.66699C19.067 6.66699 17.5 8.45785 17.5 10.667Z" fill="#7460EE"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.4806 13.333C4.97223 13.333 0.452968 16.5684 0.000760298 22.9319C-0.023872 23.2786 0.556164 23.9997 0.848753 23.9997H20.1211C20.9976 23.9997 21.0112 23.1936 20.9976 22.933C20.6557 16.3906 16.0664 13.333 10.4806 13.333ZM20.5345 16.0008C21.9989 18.2291 22.8666 20.9987 22.8667 24H27.3653C27.9982 24 28.0081 23.3955 27.9982 23.2C27.754 18.3468 24.5089 16.0504 20.5345 16.0008Z" fill="#7460EE"/>
  </svg>,
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 0H0V28H28V0Z" fill="white" fillOpacity="0.01"/>
    <path d="M2.33333 7H25.6667V11.6667L24.8509 12.1561C23.5577 12.932 21.9423 12.932 20.6491 12.1561L19.8333 11.6667L19.0175 12.1561C17.7244 12.932 16.1089 12.932 14.8158 12.1561L14 11.6667L13.1842 12.1561C11.8911 12.932 10.2756 12.932 8.98246 12.1561L8.16667 11.6667L7.35087 12.1561C6.05774 12.932 4.44226 12.932 3.14914 12.1561L2.33333 11.6667V7Z" fill="#4FC3F7" stroke="#4FC3F7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.66667 13.1182V25.6663H23.3333V12.833" stroke="#4FC3F7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.66667 6.89596V2.33301H23.3333V6.99967" stroke="#4FC3F7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.9167 18.667H11.0833V25.667H16.9167V18.667Z" fill="#4FC3F7" stroke="#4FC3F7" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.68477 4.75713C7.68477 2.77493 9.29174 1.16797 11.2742 1.16797C13.2564 1.16797 14.8635 2.77493 14.8635 4.75713C14.8635 6.73934 13.2564 8.34625 11.2742 8.34625C9.29174 8.3463 7.68477 6.73934 7.68477 4.75713ZM12.9991 10.7915C13.0351 10.01 13.3041 9.28663 13.737 8.68863C13.4332 8.62501 13.1192 8.59122 12.7971 8.59122H9.75175C9.43052 8.59122 9.11697 8.62475 8.81476 8.68758C9.27539 9.32648 9.55091 10.1068 9.55541 10.9515C10.1153 10.6435 10.7578 10.4682 11.4402 10.4682C11.9937 10.4682 12.5207 10.5835 12.9991 10.7915ZM13.6067 11.1137C14.6492 11.7675 15.3803 12.8733 15.514 14.1575C15.9388 14.356 16.4109 14.4705 16.911 14.4705C18.7375 14.4705 20.2179 12.99 20.2179 11.1636C20.2179 9.33698 18.7375 7.85673 16.911 7.85673C15.1013 7.85678 13.6341 9.31076 13.6067 11.1137ZM11.4401 17.8848C13.2663 17.8848 14.7468 16.4039 14.7468 14.578C14.7468 12.7519 13.2663 11.2711 11.4401 11.2711C9.61385 11.2711 8.13271 12.7518 8.13271 14.578C8.13277 16.4039 9.61385 17.8848 11.4401 17.8848ZM12.8429 18.1099H10.0371C7.70253 18.1099 5.80275 20.0095 5.80275 22.3444V25.7762L5.81169 25.83L6.04788 25.9034C8.27599 26.5993 10.2117 26.8321 11.8051 26.8321C14.9166 26.8321 16.7208 25.9448 16.832 25.888L17.053 25.7762H17.0764V22.3444C17.0765 20.0095 15.1778 18.1099 12.8429 18.1099ZM18.3145 14.6962H15.5298C15.4996 15.8104 15.024 16.8138 14.272 17.535C16.3473 18.1522 17.8657 20.0765 17.8657 22.3497V23.4071C20.6146 23.3059 22.199 22.5272 22.3033 22.4747L22.5244 22.3623H22.5478V18.9299C22.5481 16.5956 20.6485 14.6962 18.3145 14.6962ZM19.0588 7.78622C20.1014 8.44011 20.8325 9.54596 20.9659 10.8301C21.3907 11.0287 21.8628 11.143 22.3629 11.143C24.1897 11.143 25.67 9.66265 25.67 7.83652C25.67 6.00986 24.1896 4.52967 22.3629 4.52967C20.5534 4.52946 19.0864 5.98375 19.0588 7.78622ZM23.766 11.3688H20.9819C20.9517 12.483 20.4762 13.4863 19.7242 14.2075C21.7994 14.8244 23.3178 16.749 23.3178 19.0222V20.0796C26.0664 19.9786 27.6511 19.2 27.7555 19.1472L27.9762 19.0351H28V15.6023C28.0003 13.2682 26.1007 11.3688 23.766 11.3688ZM5.63775 14.4706C6.2847 14.4706 6.88625 14.2816 7.3964 13.9599C7.55863 12.9027 8.12545 11.9787 8.93484 11.3496C8.93823 11.2876 8.94393 11.2263 8.94393 11.1636C8.94393 9.33704 7.4631 7.85678 5.63775 7.85678C3.81084 7.85678 2.33064 9.33698 2.33064 11.1636C2.33064 12.9903 3.81079 14.4706 5.63775 14.4706ZM8.60755 17.535C7.85902 16.8173 7.38512 15.8194 7.35023 14.7116C7.24728 14.704 7.14506 14.6962 7.03981 14.6962H4.23439C1.89946 14.6962 0 16.5956 0 18.9302V22.3623L0.00867049 22.4157L0.245176 22.4895C2.03224 23.0483 3.62777 23.3051 5.01353 23.3854V22.3493C5.01379 20.0765 6.53181 18.1518 8.60755 17.535Z" fill="#3F58CD"/>
  </svg>  
]
const StatisticsCard = (props) => {
  // const [title, setDate] = useState(new Date());
  return (
    <div className="statistics-card" style={{backgroundColor:`${props.color}`}}>
      <div className="icon-back">
        {icons[props.icon-1]}
      </div>
      <div className="title">{props.title}</div>
      <div className="numbers">{props.numbers}</div>
      <div className="bottom-content">        
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.29 0C15.4449 0 15.0217 1.02172 15.6193 1.61927C15.9897 1.98971 15.9897 2.59029 15.6193 2.96073L13.4093 5.17068C12.3051 6.27487 10.5149 6.27487 9.41067 5.17067C8.30595 4.06595 6.51465 4.06656 5.41067 5.17202L0.704287 9.88476C0.315243 10.2743 0.315456 10.9055 0.704762 11.2948C1.09425 11.6843 1.72575 11.6843 2.11524 11.2948L5.4092 8.0008C6.51421 6.89579 8.30579 6.89579 9.41079 8.00079C10.5152 9.10518 12.3055 9.10589 13.4108 8.00238L17.0391 4.37982C17.4097 4.0098 18.01 4.01004 18.3803 4.38035C18.978 4.97804 20 4.55473 20 3.70947V1.75736C20 0.786797 19.2132 0 18.2426 0H16.29Z" fill="#1DF6D6"/>
        </svg>        
        <span className="rate">&nbsp;{props.rate} </span>
        <span className="content">&nbsp;{props.content}</span>
      </div>
    </div>
  )
}

export default StatisticsCard