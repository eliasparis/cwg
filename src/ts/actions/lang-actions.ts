function switchLang(lang: string){
    return {
        type : 'SWITCH_LANG',
        payload : lang      
    }
}

export { switchLang };