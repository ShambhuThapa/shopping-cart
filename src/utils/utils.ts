export const capitalizeEveryWord = (str: string) => {
    if (str) {
        const words = str.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    }
}


const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export const formatCurrency = (number: number) => {
    return CURRENCY_FORMATTER.format(number);
}


export const  hasCart=()=>{
   const cart= JSON.parse(String(localStorage.getItem("cart-details")));
   return cart?._id ? true :false;
}

export const  activeCartId=()=>{
    const cart= JSON.parse(String(localStorage.getItem("cart-details")));
    return cart?._id;
 }