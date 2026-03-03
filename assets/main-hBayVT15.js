(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const S="https://your-energy.b.goit.study/api",C={quote:"ye_quote_v1",favorites:"ye_favorites_v1"},H=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,g={runner:new URL("data:image/svg+xml,%3csvg%20width='34'%20height='32'%20viewBox='0%200%2034%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='%23F4F4F4'%20fill-opacity='0.2'/%3e%3cpath%20d='M24.7293%2011.907C24.4611%2011.594%2023.9834%2011.5528%2023.6631%2011.8138L21.5637%2013.5369L20.5983%2011.1998C20.564%2011.1121%2020.5119%2011.0384%2020.452%2010.9734C20.2547%2010.5446%2019.9122%2010.1763%2019.44%209.96297C19.235%209.872%2019.0233%209.82326%2018.8116%209.79944C18.765%209.77561%2018.7229%209.7442%2018.6697%209.72796L14.9754%208.72184C14.7681%208.6666%2014.5597%208.70234%2014.3891%208.79981C14.1862%208.86696%2014.0122%209.011%2013.9291%209.22002L12.538%2012.7149C12.3873%2013.0951%2012.5801%2013.5239%2012.9703%2013.6734C13.3582%2013.8207%2013.7983%2013.6311%2013.9501%2013.2499L15.125%2010.2987L16.8076%2010.7557C16.7666%2010.8207%2016.7222%2010.8814%2016.689%2010.9507L14.532%2015.5188C14.501%2015.586%2014.4844%2015.6542%2014.4622%2015.7235L11.8408%2020.0177L7.45378%2021.4516C6.95721%2021.8144%206.85192%2022.4978%207.2188%2022.983C7.5879%2023.4692%208.28951%2023.5721%208.78497%2023.2137L13.274%2021.7029C13.4114%2021.6054%2013.5112%2021.4776%2013.5866%2021.34C13.6431%2021.2816%2013.7074%2021.235%2013.7506%2021.1624L15.3135%2018.6022L18.0878%2020.9123L15.1195%2024.1808C14.7105%2024.6313%2014.7515%2025.3255%2015.2148%2025.7241C15.677%2026.1259%2016.3853%2026.0836%2016.7965%2025.6309L20.5008%2021.5534C20.6161%2021.4278%2020.6848%2021.2826%2020.7313%2021.131C20.759%2021.0487%2020.759%2020.9632%2020.7657%2020.8776C20.7657%2020.8343%2020.7823%2020.7953%2020.779%2020.7552C20.769%2020.4563%2020.6449%2020.1661%2020.3944%2019.9592L17.8417%2017.8322C18.0257%2017.661%2018.182%2017.4574%2018.2951%2017.2181L19.9488%2013.7189L20.4786%2015.0975C20.5008%2015.2199%2020.5429%2015.3401%2020.6316%2015.4409C20.7114%2015.534%2020.8134%2015.5957%2020.922%2015.6391C20.9331%2015.6445%2020.9464%2015.6456%2020.9597%2015.6488C21.0284%2015.6726%2021.0982%2015.6954%2021.1703%2015.6986C21.2556%2015.7062%2021.3421%2015.6954%2021.4296%2015.6715C21.4318%2015.6705%2021.4329%2015.6705%2021.4329%2015.6705C21.4562%2015.665%2021.4795%2015.6694%2021.5028%2015.6596C21.6258%2015.6141%2021.72%2015.5372%2021.8009%2015.4474L24.8136%2012.9488C25.1339%2012.6857%2024.9987%2012.22%2024.7293%2011.907Z'%20fill='%23F4F4F4'/%3e%3cpath%20d='M20.9191%2010.1263C22.0853%2010.1263%2023.0306%209.20259%2023.0306%208.06314C23.0306%206.9237%2022.0853%206%2020.9191%206C19.753%206%2018.8076%206.9237%2018.8076%208.06314C18.8076%209.20259%2019.753%2010.1263%2020.9191%2010.1263Z'%20fill='%23F4F4F4'/%3e%3c/svg%3e",import.meta.url).href,runner2:new URL("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='%23242424'/%3e%3cpath%20d='M18.8234%208.72544C18.6138%208.47504%2018.2403%208.44212%2017.9899%208.65092L16.349%2010.0294L15.5943%208.15967C15.5675%208.08949%2015.5267%208.03057%2015.4799%207.97859C15.3257%207.63549%2015.058%207.34091%2014.6889%207.17023C14.5286%207.09745%2014.3631%207.05846%2014.1977%207.0394C14.1613%207.02034%2014.1283%206.99521%2014.0868%206.98222L11.199%206.17732C11.037%206.13314%2010.8741%206.16173%2010.7407%206.2397C10.5821%206.29342%2010.4461%206.40865%2010.3811%206.57587L9.29378%209.37178C9.17594%209.67589%209.3267%2010.019%209.63168%2010.1386C9.93492%2010.2564%2010.2789%2010.1048%2010.3976%209.79978L11.316%207.43882L12.6312%207.80444C12.5991%207.85643%2012.5645%207.90495%2012.5385%207.9604L10.8524%2011.6149C10.8282%2011.6686%2010.8152%2011.7232%2010.7979%2011.7787L8.7488%2015.214L5.31955%2016.3611C4.9314%2016.6514%204.84909%2017.1981%205.13587%2017.5862C5.42439%2017.9752%205.97282%2018.0575%206.36011%2017.7708L9.86907%2016.5621C9.97651%2016.4841%2010.0545%2016.3819%2010.1134%2016.2719C10.1576%2016.2251%2010.2078%2016.1878%2010.2416%2016.1298L11.4633%2014.0816L13.6319%2015.9296L11.3116%2018.5445C10.9919%2018.9049%2011.024%2019.4603%2011.3862%2019.7791C11.7474%2020.1005%2012.3011%2020.0667%2012.6225%2019.7046L15.5181%2016.4426C15.6082%2016.342%2015.6619%2016.2259%2015.6983%2016.1047C15.7199%2016.0388%2015.7199%2015.9704%2015.7251%2015.9019C15.7251%2015.8673%2015.7381%2015.8361%2015.7355%2015.804C15.7277%2015.5649%2015.6307%2015.3327%2015.4349%2015.1672L13.4395%2013.4656C13.5834%2013.3287%2013.7055%2013.1658%2013.7939%2012.9743L15.0866%2010.1749L15.5007%2011.2779C15.5181%2011.3758%2015.551%2011.472%2015.6203%2011.5525C15.6827%2011.627%2015.7624%2011.6764%2015.8473%2011.7111C15.856%2011.7154%2015.8664%2011.7163%2015.8768%2011.7189C15.9305%2011.7379%2015.9851%2011.7561%2016.0414%2011.7587C16.1081%2011.7648%2016.1757%2011.7561%2016.2441%2011.7371C16.2459%2011.7362%2016.2467%2011.7362%2016.2467%2011.7362C16.2649%2011.7319%2016.2831%2011.7353%2016.3013%2011.7275C16.3975%2011.6912%2016.4711%2011.6296%2016.5344%2011.5577L18.8893%209.55892C19.1397%209.34838%2019.034%208.97583%2018.8234%208.72544Z'%20fill='%23F4F4F4'/%3e%3cpath%20d='M15.8448%207.30102C16.7564%207.30102%2017.4954%206.56206%2017.4954%205.65051C17.4954%204.73896%2016.7564%204%2015.8448%204C14.9333%204%2014.1943%204.73896%2014.1943%205.65051C14.1943%206.56206%2014.9333%207.30102%2015.8448%207.30102Z'%20fill='%23F4F4F4'/%3e%3c/svg%3e",import.meta.url).href,quote:new URL("data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.75038%208.30157C4.90975%207.84218%205.83944%207.9625%206.53944%208.6625C7.23945%209.36251%207.44725%2010.4781%207.16287%2012.0094C6.94413%2013.1469%206.46288%2014.0219%205.71912%2014.6344C4.99725%2015.225%204.15507%2015.5203%203.19257%2015.5203C1.88006%2015.5203%200.972261%2015.0172%200.469125%2014.0109C-0.0339939%2012.9828%20-0.132432%2011.6047%200.173817%209.87657C0.348813%208.93594%200.633189%207.98438%201.02693%207.02186C1.4207%206.05937%201.9457%205.07501%202.60193%204.06876C3.25819%203.06251%204.11132%202.18749%205.16132%201.44376C6.21132%200.699998%207.37069%200.21875%208.63945%200L8.31132%203.47812C7.23945%203.69688%206.28788%204.25469%205.45664%205.15157C4.62537%206.02656%204.05662%207.07656%203.75038%208.30157ZM13.6269%208.30157C14.7863%207.84218%2015.716%207.9625%2016.416%208.6625C17.116%209.36251%2017.3238%2010.4781%2017.0394%2012.0094C16.8207%2013.1469%2016.3394%2014.0219%2015.5957%2014.6344C14.8738%2015.225%2014.0316%2015.5203%2013.0691%2015.5203C11.7566%2015.5203%2010.8488%2015.0172%2010.3457%2014.0109C9.84256%2012.9828%209.74414%2011.6047%2010.0504%209.87657C10.2254%208.93594%2010.5098%207.98438%2010.9035%207.02186C11.2973%206.05937%2011.8223%205.07501%2012.4785%204.06876C13.1348%203.06251%2013.9879%202.18749%2015.0379%201.44376C16.0879%200.699998%2017.2473%200.21875%2018.516%200L18.1879%203.47812C17.116%203.69688%2016.1645%204.25469%2015.3332%205.15157C14.5019%206.02656%2013.9332%207.07656%2013.6269%208.30157Z'%20fill='%23F4F4F4'/%3e%3c/svg%3e",import.meta.url).href,logoL:new URL("data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='%23242424'/%3e%3cpath%20d='M10.6%2011.7143H9.4C9.0675%2011.7143%208.8%2012.0009%208.8%2012.3571V15.1429H8.2C8.09%2015.1429%208%2015.2393%208%2015.3571V16.6429C8%2016.7607%208.09%2016.8571%208.2%2016.8571H8.8V19.6429C8.8%2019.9991%209.0675%2020.2857%209.4%2020.2857H10.6C10.9325%2020.2857%2011.2%2019.9991%2011.2%2019.6429V12.3571C11.2%2012.0009%2010.9325%2011.7143%2010.6%2011.7143ZM23.8%2015.1429H23.2V12.3571C23.2%2012.0009%2022.9325%2011.7143%2022.6%2011.7143H21.4C21.0675%2011.7143%2020.8%2012.0009%2020.8%2012.3571V19.6429C20.8%2019.9991%2021.0675%2020.2857%2021.4%2020.2857H22.6C22.9325%2020.2857%2023.2%2019.9991%2023.2%2019.6429V16.8571H23.8C23.91%2016.8571%2024%2016.7607%2024%2016.6429V15.3571C24%2015.2393%2023.91%2015.1429%2023.8%2015.1429ZM19.4%2010H18.2C17.8675%2010%2017.6%2010.2866%2017.6%2010.6429V15.1429H14.4V10.6429C14.4%2010.2866%2014.1325%2010%2013.8%2010H12.6C12.2675%2010%2012%2010.2866%2012%2010.6429V21.3571C12%2021.7134%2012.2675%2022%2012.6%2022H13.8C14.1325%2022%2014.4%2021.7134%2014.4%2021.3571V16.8571H17.6V21.3571C17.6%2021.7134%2017.8675%2022%2018.2%2022H19.4C19.7325%2022%2020%2021.7134%2020%2021.3571V10.6429C20%2010.2866%2019.7325%2010%2019.4%2010Z'%20fill='%23F4F4F4'/%3e%3c/svg%3e",import.meta.url).href,star:new URL("data:image/svg+xml,%3csvg%20width='13'%20height='13'%20viewBox='0%200%2013%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.53283%200.690968C5.83218%20-0.230342%207.13559%20-0.230343%207.43494%200.690968L8.28%203.29178C8.41387%203.7038%208.79783%203.98276%209.23106%203.98276H11.9657C12.9344%203.98276%2013.3372%205.22238%2012.5535%205.79178L10.3411%207.39917C9.99063%207.65381%209.84397%208.10518%209.97784%208.5172L10.8229%2011.118C11.1222%2012.0393%2010.0678%2012.8055%209.28406%2012.2361L7.07167%2010.6287C6.72118%2010.374%206.24659%2010.374%205.8961%2010.6287L3.68372%2012.2361C2.9%2012.8055%201.84552%2012.0393%202.14488%2011.118L2.98993%208.51721C3.12381%208.10518%202.97715%207.65381%202.62666%207.39917L0.414278%205.79178C-0.369436%205.22238%200.033339%203.98276%201.00206%203.98276H3.73672C4.16994%203.98276%204.5539%203.7038%204.68777%203.29178L5.53283%200.690968Z'%20fill='%23EEA10C'/%3e%3c/svg%3e",import.meta.url).href,starG:new URL("data:image/svg+xml,%3csvg%20width='13'%20height='13'%20viewBox='0%200%2013%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.53271%200.690968C5.83206%20-0.230342%207.13547%20-0.230343%207.43482%200.690968L8.27988%203.29178C8.41375%203.7038%208.79771%203.98276%209.23093%203.98276H11.9656C12.9343%203.98276%2013.3371%205.22238%2012.5534%205.79178L10.341%207.39917C9.9905%207.65381%209.84385%208.10518%209.97772%208.5172L10.8228%2011.118C11.1221%2012.0393%2010.0676%2012.8055%209.28393%2012.2361L7.07155%2010.6287C6.72106%2010.374%206.24647%2010.374%205.89598%2010.6287L3.6836%2012.2361C2.89988%2012.8055%201.8454%2012.0393%202.14475%2011.118L2.98981%208.51721C3.12368%208.10518%202.97703%207.65381%202.62654%207.39917L0.414156%205.79178C-0.369558%205.22238%200.033217%203.98276%201.00194%203.98276H3.7366C4.16982%203.98276%204.55378%203.7038%204.68765%203.29178L5.53271%200.690968Z'%20fill='%23F4F4F4'%20fill-opacity='0.2'/%3e%3c/svg%3e",import.meta.url).href,arrow:new URL("data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2014L14%207.5M14%207.5L7.5%201M14%207.5H1'%20stroke='%23242424'%20stroke-width='1.3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",import.meta.url).href,delete:new URL("data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.31669%203.31669V2.78336C9.31669%202.03662%209.31669%201.66325%209.17137%201.37804C9.04354%201.12715%208.83956%200.92318%208.58868%200.795349C8.30346%200.650024%207.93009%200.650024%207.18336%200.650024H6.11669C5.36995%200.650024%204.99659%200.650024%204.71137%200.795349C4.46049%200.92318%204.25651%201.12715%204.12868%201.37804C3.98336%201.66325%203.98336%202.03662%203.98336%202.78336V3.31669M5.31669%206.98336V10.3167M7.98336%206.98336V10.3167M0.650024%203.31669H12.65M11.3167%203.31669V10.7834C11.3167%2011.9035%2011.3167%2012.4635%2011.0987%2012.8913C10.907%2013.2677%2010.601%2013.5736%2010.2247%2013.7654C9.79685%2013.9834%209.2368%2013.9834%208.11669%2013.9834H5.18336C4.06325%2013.9834%203.5032%2013.9834%203.07538%2013.7654C2.69905%2013.5736%202.39309%2013.2677%202.20134%2012.8913C1.98336%2012.4635%201.98336%2011.9035%201.98336%2010.7834V3.31669'%20stroke='%23242424'%20stroke-width='1.3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",import.meta.url).href,food:new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.6%205.71429H3.4C3.0675%205.71429%202.8%206.00089%202.8%206.35714V9.14286H2.2C2.09%209.14286%202%209.23929%202%209.35714V10.6429C2%2010.7607%202.09%2010.8571%202.2%2010.8571H2.8V13.6429C2.8%2013.9991%203.0675%2014.2857%203.4%2014.2857H4.6C4.9325%2014.2857%205.2%2013.9991%205.2%2013.6429V6.35714C5.2%206.00089%204.9325%205.71429%204.6%205.71429ZM17.8%209.14286H17.2V6.35714C17.2%206.00089%2016.9325%205.71429%2016.6%205.71429H15.4C15.0675%205.71429%2014.8%206.00089%2014.8%206.35714V13.6429C14.8%2013.9991%2015.0675%2014.2857%2015.4%2014.2857H16.6C16.9325%2014.2857%2017.2%2013.9991%2017.2%2013.6429V10.8571H17.8C17.91%2010.8571%2018%2010.7607%2018%2010.6429V9.35714C18%209.23929%2017.91%209.14286%2017.8%209.14286ZM13.4%204H12.2C11.8675%204%2011.6%204.28661%2011.6%204.64286V9.14286H8.4V4.64286C8.4%204.28661%208.1325%204%207.8%204H6.6C6.2675%204%206%204.28661%206%204.64286V15.3571C6%2015.7134%206.2675%2016%206.6%2016H7.8C8.1325%2016%208.4%2015.7134%208.4%2015.3571V10.8571H11.6V15.3571C11.6%2015.7134%2011.8675%2016%2012.2%2016H13.4C13.7325%2016%2014%2015.7134%2014%2015.3571V4.64286C14%204.28661%2013.7325%204%2013.4%204Z'%20fill='%23242424'/%3e%3c/svg%3e",import.meta.url).href},o={activeFilter:"Muscles",activeCategory:null,keyword:"",page:1,limitCategories:12,limitExercises:10,totalPages:1},c={searchForm:document.getElementById("searchForm"),searchInput:document.getElementById("searchInput"),searchClear:document.getElementById("searchClear"),exSub:document.getElementById("exSub"),breadcrumbs:document.querySelectorAll(".breadcrumbs"),content:document.getElementById("content"),pagination:document.getElementById("pagination"),backdrop:document.getElementById("backdrop"),modalBody:document.getElementById("modalBody"),modalClose:document.getElementById("modalClose")};function d(e,t=document){return t.querySelector(e)}function P(e,t=document){return[...t.querySelectorAll(e)]}function l(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function h(e=""){return String(e).replace(/[-_]+/g," ").split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function q(e){const t=String(e||"").trim();return t?t.charAt(0).toUpperCase()+t.slice(1):""}function L(e){return String(e||"").trim().split(/\s+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}function x(){const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${i}`}function _(){return location.pathname.endsWith("/page-2.html")||location.pathname.endsWith("page-2.html")}function I(){let e=document.getElementById("pagination");if(e)return c.pagination=e,e;const t=document.getElementById("favoritesList");return t?(e=document.createElement("nav"),e.id="pagination",e.className="pagination",t.insertAdjacentElement("afterend",e),c.pagination=e,e):null}async function y(e,t={}){const a=new URL(S+e);Object.entries(t).forEach(([s,n])=>{n!=null&&n!==""&&a.searchParams.set(s,n)});const i=await fetch(a);if(!i.ok)throw new Error(`GET ${a} -> ${i.status}`);return i.json()}async function N(e,t){const a=await fetch(S+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error((i==null?void 0:i.message)||`POST ${e} -> ${a.status}`);return i}async function U(e,t){const a=await fetch(S+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error((i==null?void 0:i.message)||`PATCH ${e} -> ${a.status}`);return i}function R(e){var t,a;(t=c.searchForm)==null||t.classList.remove("is-hidden"),(a=c.breadcrumbs)==null||a.forEach(i=>i.classList.remove("is-hidden")),c.exSub&&(c.exSub.textContent=e||"")}function O(){var e,t;(e=c.searchForm)==null||e.classList.add("is-hidden"),(t=c.breadcrumbs)==null||t.forEach(a=>a.classList.add("is-hidden")),c.exSub&&(c.exSub.textContent="")}function j(){const e=document.querySelector(".burger"),t=document.querySelector("#mobileMenu"),a=document.querySelector(".menu-close"),i=document.querySelector("#menuBackdrop");if(!e||!t||!a||!i)return;function s(){t.classList.add("is-open"),t.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true"),i.hidden=!1,document.body.style.overflow="hidden"}function n(){t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"),i.hidden=!0,document.body.style.overflow=""}e.addEventListener("click",s),a.addEventListener("click",n),i.addEventListener("click",n),document.addEventListener("keydown",r=>{r.key==="Escape"&&n()})}function Z(){const e=document.querySelector('.nav-pill a[href="./index.html"]'),t=document.querySelector('.nav-pill a[href="./page-2.html"]');if(!e||!t)return;const a=window.location.pathname;e.classList.remove("is-active"),t.classList.remove("is-active"),a.includes("page-2")?t.classList.add("is-active"):e.classList.add("is-active")}async function D(e){var s,n;e.innerHTML=`
    <div class="left-stack">
      <section class="card card--dark" id="quoteCard">
        <div class="card-head">
          <div class="card-head__left">
            <img class="card-ico" src="${g.runner}" alt="" aria-hidden="true" />
            <h2 class="card-title">Quote of the day</h2>
          </div>

          <img class="card-ico card-ico--right" src="${g.quote}" alt="" aria-hidden="true" />
        </div>

        <p class="quote-text" id="quoteText">Loading...</p>
        <p class="author" id="quoteAuthor"></p>
      </section>

      <div class="left-photo" aria-hidden="true">
        <img
          class="left-photo-img"
          src="./img/webp/image.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <section class="card card--light">
        <div class="card-head card-head--light">
          <div class="card-head__left">
            <img class="card-ico" src="${g.logoL}" alt="" aria-hidden="true" />
            <div class="card-head__texts">
              <h3 class="minutes-title">110 min</h3>
              <p class="muted-dark">Daily norm of sports.</p>
            </div>
          </div>
        </div>

        <p class="card-body-text">
          The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic physical activity throughout the week for adults aged 18-64. However, what happens if we adjust that number to 110 minutes every day? While it might seem like a high number to hit, dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to physical health, mental well-being, and overall quality of life.
        </p>
      </section>
    </div>
  `;const t=localStorage.getItem(C.quote);if(t)try{const r=JSON.parse(t);if((r==null?void 0:r.date)===x()&&((s=r==null?void 0:r.quote)!=null&&s.quote)&&((n=r==null?void 0:r.quote)!=null&&n.author)){i(r.quote);return}}catch{}const a=await y("/quote");localStorage.setItem(C.quote,JSON.stringify({date:x(),quote:a})),i(a);function i(r){d("#quoteText",e).textContent=r.quote,d("#quoteAuthor",e).textContent=r.author}}function J(e){e.innerHTML=`
    <section id="content"></section>
    <nav class="pagination" id="pagination"></nav>

    <div class="backdrop is-hidden" id="backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Modal">
        <button class="modal-close" id="modalClose" aria-label="Close modal">×</button>
        <div id="modalBody"></div>
      </div>
    </div>
  `,c.content=document.getElementById("content"),c.pagination=document.getElementById("pagination"),c.backdrop=document.getElementById("backdrop"),c.modalBody=document.getElementById("modalBody"),c.modalClose=document.getElementById("modalClose")}function W(){const e=document.querySelector("#tabsMount");e&&(e.innerHTML=`
    <div class="tabs" id="tabs">
      <button class="tab is-active" data-filter="Muscles" type="button">Muscles</button>
      <button class="tab" data-filter="Body parts" type="button">Body parts</button>
      <button class="tab" data-filter="Equipment" type="button">Equipment</button>
    </div>
  `)}async function b(){O();const e=c.content||d("#content"),t=c.pagination||d("#pagination");t&&(t.innerHTML=""),e&&(e.innerHTML='<p class="muted">Loading categories.</p>');const a=await y("/filters",{filter:o.activeFilter,page:o.page,limit:o.limitCategories}).catch(()=>null),i=(a==null?void 0:a.results)||a||[];if(o.totalPages=(a==null?void 0:a.totalPages)||1,!Array.isArray(i)||i.length===0){e&&(e.innerHTML='<p class="muted">No categories found.</p>');return}e&&(e.innerHTML=`
      <div class="grid" id="categoriesGrid">
        ${i.map(s=>{const n=s.name||s,r=s.imgURL||s.img||"";return`
              <button class="tile" type="button" data-category="${l(String(n))}">
                <span class="tile-bg" style="background-image:url('${l(r)}')"></span>
                <span class="tile-title">${l(h(String(n)))}</span>
                <span class="tile-sub">${l(o.activeFilter)}</span>
              </button>
            `}).join("")}
      </div>
    `),k()}async function w(){R(h(o.activeCategory||""));const e=c.content||d("#content");e&&(e.innerHTML='<p class="muted">Loading exercises.</p>');const t={page:o.page,limit:o.limitExercises,keyword:o.keyword||void 0};o.activeCategory&&(o.activeFilter==="Muscles"&&(t.muscles=o.activeCategory),o.activeFilter==="Body parts"&&(t.bodypart=o.activeCategory),o.activeFilter==="Equipment"&&(t.equipment=o.activeCategory));const a=await y("/exercises",t).catch(()=>null),i=(a==null?void 0:a.results)||a||[];if(o.totalPages=(a==null?void 0:a.totalPages)||1,!Array.isArray(i)||i.length===0){e&&(e.innerHTML='<p class="muted">No exercises found.</p>');return}e&&(e.innerHTML=`
      <div class="list" id="exerciseList">
        ${i.map(s=>`
            <article class="ex-card">
              <div class="ex-top">
                <div class="ex-top-left">
                  <span class="badge">WORKOUT</span>
                  <span class="rating">
                    ${Number(s.rating||0).toFixed(1)}
                    <img class="rating-star" src="${g.star}" alt="star">
                  </span>
                </div>

                <div class="ex-actions">
                  <button class="start" type="button" data-start="${l(s._id)}">
                    Start <img class="start-arrow" src="${g.arrow}" alt="arrow" />
                  </button>
                </div>
              </div>

              <div class="ex-title-row">
                <span class="ex-runner">
                  <img src="${g.runner2}" alt="runner" />
                </span>
                <h3 class="ex-title">${l(q(String(s.name||"")))}</h3>
              </div>

              <div class="ex-meta">
                <div class="ex-meta-item">
                  <span class="ex-meta-label">Burned calories:</span>
                  <span class="ex-meta-value">
                    <b>${l(String(s.burnedCalories??"-"))} / ${l(String(s.time??"-"))} min</b>
                  </span>
                </div>
                <div class="ex-meta-item">
                  <span class="ex-meta-label">Body part:</span>
                  <span class="ex-meta-value">
                    <b>${l(L(String(s.bodyPart??"-")))}</b>
                  </span>
                </div>
                <div class="ex-meta-item">
                  <span class="ex-meta-label">Target:</span>
                  <span class="ex-meta-value">
                    <b>${l(L(String(s.target??"-")))}</b>
                  </span>
                </div>
              </div>
            </article>
          `).join("")}
      </div>
    `),k()}function k(){const e=c.pagination||d("#pagination");if(!e)return;const t=Number(o.totalPages||1),a=Number(o.page||1);if(t<=1){e.innerHTML="";return}const i=5,s=(m,p,v)=>Math.max(p,Math.min(v,m));let n=a-Math.floor(i/2),r=a+Math.floor(i/2);n<1&&(n=1,r=Math.min(t,n+i-1)),r>t&&(r=t,n=Math.max(1,r-i+1));const u=[];u.push(`<button class="pg-btn" type="button" data-page="${s(a-1,1,t)}" ${a===1?"disabled":""}>‹</button>`),n>1&&(u.push('<button class="pg-btn" type="button" data-page="1">1</button>'),n>2&&u.push('<span class="pg-dots">…</span>'));for(let m=n;m<=r;m++)u.push(`<button class="pg-btn ${m===a?"is-active":""}" type="button" data-page="${m}">${m}</button>`);r<t&&(r<t-1&&u.push('<span class="pg-dots">…</span>'),u.push(`<button class="pg-btn" type="button" data-page="${t}">${t}</button>`)),u.push(`<button class="pg-btn" type="button" data-page="${s(a+1,1,t)}" ${a===t?"disabled":""}>›</button>`),e.innerHTML=u.join("")}function E(e,t="exercise"){var m;z();const a=c.backdrop||d("#backdrop"),i=c.modalBody||d("#modalBody");if(!a||!i)return;const s=a.querySelector(".modal");s&&(s.classList.toggle("modal--exercise",t==="exercise"),s.classList.toggle("modal--rating",t==="rating")),i.innerHTML=e,a.classList.remove("is-hidden");const n=p=>{p.key==="Escape"&&u()},r=p=>{p.target===a&&u()};(m=c.modalClose||d("#modalClose"))==null||m.addEventListener("click",u,{once:!0}),document.addEventListener("keydown",n),a.addEventListener("click",r);function u(){a.classList.add("is-hidden"),document.removeEventListener("keydown",n),a.removeEventListener("click",r),i.innerHTML="",s&&s.classList.remove("modal--exercise","modal--rating")}window.__closeModal=u}async function F(e){var p,v;E('<p class="modal-loading">Loading.</p>',"exercise");const t=await y(`/exercises/${e}`),a=B(t._id),i=Number(t.rating||0),s=Number.isFinite(i)?i.toFixed(1):"0.0",n=Array.from({length:5},(f,V)=>`<img class="star-ico" src="${V<Math.round(i)?g.star:g.starG}" alt="star" />`).join(""),r=t.gifUrl||t.gifURL||t.imageUrl||t.imageUrl||t.imgUrl||t.imgURL||"",u=t.videoUrl||t.videoURL||t.video||"",m=u?`<video class="ex-media" src="${l(String(u))}" controls playsinline></video>`:`<img class="ex-media" src="${l(String(r))}" alt="${l(String(t.name||"exercise"))}" loading="lazy" />`;E(`
    <div class="exercise-modal">
      <div class="exercise-media">
        <div class="media-box">
          ${m}
        </div>
      </div>

      <div class="exercise-info">
        <h2 class="exercise-title">${l(h(t.name))}</h2>

        <div class="exercise-rating">
          <span class="exercise-rating__value">${l(s)}</span>
          <div class="stars" aria-label="Rating ${l(s)} out of 5">
            ${n}
          </div>
        </div>

        <div class="modal-divider"></div>

        <div class="exercise-kv">
          <div class="kv-item">
            <span class="kv-label">Target</span>
            <span class="kv-value">${l(h(t.target||"-"))}</span>
          </div>
          <div class="kv-item">
            <span class="kv-label">Body Part</span>
            <span class="kv-value">${l(h(t.bodyPart||"-"))}</span>
          </div>
          <div class="kv-item">
            <span class="kv-label">Equipment</span>
            <span class="kv-value">${l(h(t.equipment||"-"))}</span>
          </div>
          <div class="kv-item">
            <span class="kv-label">Popular</span>
            <span class="kv-value">${l(String(t.popularity??"-"))}</span>
          </div>
        </div>

        <div class="exercise-calories">
          <span class="exercise-calories__label">Burned calories</span>
          <span class="exercise-calories__value">${l(String(t.burnedCalories??"-"))}/${l(String(t.time??"-"))} min</span>
        </div>

        <div class="modal-divider"></div>

        <p class="exercise-desc">${l(t.description||"")}</p>

        <div class="modal-actions">
          <button class="modal-btn modal-btn--primary" type="button" id="favBtn">${a?"Remove from favorites":"Add to favorites"}</button>
          <button class="modal-btn modal-btn--outline" type="button" id="rateBtn">Give a rating</button>
        </div>
      </div>
    </div>
  `,"exercise"),(p=d("#favBtn"))==null||p.addEventListener("click",()=>{var f;B(t._id)?A(t._id):Q(t),(f=window.__closeModal)==null||f.call(window),_()&&M()}),(v=d("#rateBtn"))==null||v.addEventListener("click",()=>{var f;(f=window.__closeModal)==null||f.call(window),G(t._id)})}function z(){let e=document.getElementById("backdrop"),t=document.getElementById("modalBody"),a=document.getElementById("modalClose");if(e&&t&&a){c.backdrop=e,c.modalBody=t,c.modalClose=a;return}document.body.insertAdjacentHTML("beforeend",`
    <div class="backdrop is-hidden" id="backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Modal">
        <button class="modal-close" id="modalClose" aria-label="Close modal">×</button>
        <div id="modalBody"></div>
      </div>
    </div>
  `),c.backdrop=document.getElementById("backdrop"),c.modalBody=document.getElementById("modalBody"),c.modalClose=document.getElementById("modalClose")}function G(e){E(`
    <form class="rating-modal" id="ratingForm">
      <div class="rating-head">
        <span class="rating-head__label">Rating</span>
        <div class="rating-head__stars">
          <span class="rating-head__value" id="ratingValue">0.0</span>

          <div class="rating-stars" role="radiogroup" aria-label="Choose rating">
            ${[5,4,3,2,1].map(s=>`
              <input class="rating-star-input" type="radio" id="rate${s}" name="rating" value="${s}" ${s===1?"required":""} />
              <label class="rating-star-label" for="rate${s}" aria-label="${s} stars"></label>
            `).join("")}
          </div>
        </div>
      </div>

      <input class="rating-input" type="email" name="email" placeholder="Email" required />
      <textarea class="rating-input rating-textarea" name="comment" placeholder="Your comment" rows="4"></textarea>

      <button class="modal-btn modal-btn--primary modal-btn--full" type="submit">Send</button>
      <p class="rating-msg" id="ratingMsg" aria-live="polite"></p>
    </form>
  `,"rating");const t=d("#ratingForm"),a=d("#ratingValue"),i=d("#ratingMsg");t==null||t.addEventListener("change",s=>{const n=s.target;n instanceof HTMLInputElement&&n.name==="rating"&&a&&(a.textContent=`${Number(n.value).toFixed(1)}`)}),t==null||t.addEventListener("submit",async s=>{var p;s.preventDefault(),i&&(i.textContent="");const n=new FormData(s.currentTarget),r=Number(n.get("rating")),u=String(n.get("email")||"").trim(),m=String(n.get("comment")||"").trim();if(!Number.isFinite(r)||r<1||r>5){i&&(i.textContent="Please choose a rating.");return}if(!H.test(u)){i&&(i.textContent="Invalid email.");return}try{await U(`/exercises/${e}/rating`,{rate:r,email:u,review:m}),(p=window.__closeModal)==null||p.call(window),await F(e)}catch(v){i&&(i.textContent=(v==null?void 0:v.message)||"Failed to send rating.")}})}function $(){const e=localStorage.getItem(C.favorites);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function T(e){localStorage.setItem(C.favorites,JSON.stringify(e))}function B(e){return $().some(t=>(t==null?void 0:t._id)===e)}function Q(e){const t=$();t.some(a=>a._id===e._id)||(t.unshift({_id:e._id,name:e.name,rating:e.rating,bodyPart:e.bodyPart,target:e.target,burnedCalories:e.burnedCalories,time:e.time}),T(t))}function A(e){const t=$().filter(a=>a._id!==e);T(t)}function K(){const e=d("#favoritesList");e&&e.dataset.bound!=="1"&&(e.dataset.bound="1",e.addEventListener("click",async t=>{const a=t.target.closest("[data-start]");if(a){await F(a.dataset.start);return}const i=t.target.closest("[data-remove]");i&&(A(i.dataset.remove),M())}))}function M(){const e=d("#favoritesList");if(!e)return;const t=I(),a=$(),i=Number(o.limitExercises||10);if(o.totalPages=Math.max(1,Math.ceil(a.length/i)),o.page=Math.max(1,Math.min(o.page,o.totalPages)),a.length===0){e.innerHTML='<p class="muted">No favorites yet.</p>',t&&(t.innerHTML="");return}const s=(o.page-1)*i,n=a.slice(s,s+i);e.innerHTML=`
    <div class="list" id="exerciseList">
      ${n.map(r=>`
            <article class="ex-card">
              <div class="ex-top">
                <div class="ex-top-left">
                  <span class="badge">WORKOUT</span>
                  <button class="danger" type="button" data-remove="${l(r._id)}">
                    <img src="${g.delete}" alt="delete"/>
                  </button>
                </div>

                <div class="ex-actions">
                  <button class="start" type="button" data-start="${l(r._id)}">
                    Start <img class="start-arrow" src="${g.arrow}" alt="arrow" />
                  </button>
                </div>
              </div>

              <div class="ex-title-row">
                <span class="ex-runner">
                  <img src="${g.runner2}" alt="runner" />
                </span>
                <h3 class="ex-title">${l(q(String(r.name||"")))}</h3>
              </div>

              <div class="ex-meta">
                <div class="ex-meta-item">
                  <span class="ex-meta-label">Burned calories:</span>
                  <span class="ex-meta-value">
                    <b>${l(String(r.burnedCalories??"-"))} / ${l(String(r.time??"-"))} min</b>
                  </span>
                </div>
                <div class="ex-meta-item">
                  <span class="ex-meta-label">Body part:</span>
                  <span class="ex-meta-value">
                    <b>${l(L(String(r.bodyPart??"-")))}</b>
                  </span>
                </div>
                <div class="ex-meta-item">
                  <span class="ex-meta-label">Target::</span>
                  <span class="ex-meta-value">
                    <b>${l(L(String(r.target??"-")))}</b>
                  </span>
                </div>
              </div>
            </article>
          `).join("")}
    </div>
  `,k()}function Y(){var i,s;const e=d("#favoritesInfo");if(!e)return;e.innerHTML=`
    <div class="left-stack-fav">
      <section class="card card--dark" id="quoteCard">
        <div class="card-head">
          <div class="card-head__left">
            <img class="card-ico" src="${g.runner}" alt="" aria-hidden="true" />
            <h2 class="card-title">Quote of the day</h2>
          </div>

          <img class="card-ico card-ico--right" src="${g.quote}" alt="" aria-hidden="true" />
        </div>

        <p class="quote-text-fav" id="quoteText">Loading.</p>
        <p class="author" id="quoteAuthor"></p>
      </section>

      <div class="left-photo-fav" aria-hidden="true">
        <img
          class="left-photo-fav-img"
          src="./img/webp/image.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <section class="card card--light-fav">
        <div class="card-head">
          <div class="card-head-fav">
            <img class="card-ico-fav" src="${g.food}" alt="" aria-hidden="true" />
            <h3 class="minutes-title">110 min</h3>
            <p class="muted-dark">Daily norm of sports.</p>
          </div>
        </div>
      </section>
    </div>
  `;function t(n){d("#quoteText",e).textContent=n.quote,d("#quoteAuthor",e).textContent=n.author}const a=localStorage.getItem(C.quote);if(a)try{const n=JSON.parse(a);if((n==null?void 0:n.date)===x()&&((i=n==null?void 0:n.quote)!=null&&i.quote)&&((s=n==null?void 0:n.quote)!=null&&s.author)){t(n.quote);return}}catch{}y("/quote").then(n=>{localStorage.setItem(C.quote,JSON.stringify({date:x(),quote:n})),t(n)}).catch(()=>{d("#quoteText",e).textContent="Failed to load quote.",d("#quoteAuthor",e).textContent=""})}function X(){const e=d("#subscribeForm");if(!e)return;const t=d("#subscribeMsg");e.addEventListener("submit",async a=>{a.preventDefault(),t&&(t.textContent="");const i=String(new FormData(e).get("email")||"").trim();if(!H.test(i)){t&&(t.textContent="Invalid email.");return}try{await N("/subscription",{email:i}),t&&(t.textContent="Successfully subscribed!"),e.reset()}catch(s){t&&(t.textContent=(s==null?void 0:s.message)||"Subscription failed.")}})}function t2(){const e=c.searchForm,t=c.searchInput,a=c.searchClear,i=e==null?void 0:e.querySelector(".search-field");if(!e||!t||!a||!i)return;const s=()=>i.classList.toggle("has-value",t.value.trim().length>0);t.addEventListener("input",s),a.addEventListener("click",async()=>{t.value="",s(),o.keyword="",o.page=1,o.activeCategory?await w():await b(),t.focus()}),s()}async function e2(){var a,i,s,n;const e=d("#leftColumn"),t=d("#rightColumn");!e||!t||(await D(e),J(t),W(),t2(),(a=d("#tabs"))==null||a.addEventListener("click",async r=>{const u=r.target.closest("[data-filter]");u&&(o.activeFilter=u.dataset.filter,o.activeCategory=null,o.keyword="",o.page=1,P(".tab",d("#tabs")).forEach(m=>m.classList.toggle("is-active",m===u)),c.searchInput&&(c.searchInput.value=""),await b())}),(i=c.searchForm)==null||i.addEventListener("submit",async r=>{r.preventDefault(),o.keyword=String(new FormData(r.currentTarget).get("q")||"").trim(),o.page=1,o.activeCategory?await w():await b()}),(s=d("#content"))==null||s.addEventListener("click",async r=>{const u=r.target.closest("[data-category]"),m=r.target.closest("[data-start]");u&&(o.activeCategory=u.dataset.category,o.keyword="",o.page=1,c.searchInput&&(c.searchInput.value=""),await w()),m&&await F(m.dataset.start)}),(n=d("#pagination"))==null||n.addEventListener("click",async r=>{const u=r.target.closest("[data-page]");if(!u)return;const m=Number(u.dataset.page);!Number.isFinite(m)||m===o.page||(o.page=m,o.activeCategory?await w():await b())}),await b())}function a2(){var e;if(j(),X(),Z(),_()){o.page=1,o.limitExercises=10,I(),M(),Y(),(e=d("#pagination"))==null||e.addEventListener("click",t=>{const a=t.target.closest("[data-page]");if(!a)return;const i=Number(a.dataset.page);!Number.isFinite(i)||i===o.page||(o.page=i,M())}),K();return}e2().catch(t=>{console.error(t);const a=d("#rightColumn");a&&(a.innerHTML=`<p class="muted">App error: ${l((t==null?void 0:t.message)||"unknown")}</p>`)})}a2();
//# sourceMappingURL=main-hBayVT15.js.map
