"use strict";(self.webpackChunkangular_pokemon_pokedex=self.webpackChunkangular_pokemon_pokedex||[]).push([[391],{391:(wn,x,r)=>{r.r(x),r.d(x,{PokemonModule:()=>Tn});var s=r(6895),y=r(534),d=r(6548),C=r(3900),b=r(9751),T=r(8421);const{isArray:Z}=Array;var I=r(515),A=r(5403),D=r(3269);function P(...t){const i=(0,D.jO)(t),e=function w(t){return 1===t.length&&Z(t[0])?t[0]:t}(t);return e.length?new b.y(o=>{let a=e.map(()=>[]),p=e.map(()=>!1);o.add(()=>{a=p=null});for(let c=0;!o.closed&&c<e.length;c++)(0,T.Xf)(e[c]).subscribe((0,A.x)(o,m=>{if(a[c].push(m),a.every(g=>g.length)){const g=a.map(_=>_.shift());o.next(i?i(...g):g),a.some((_,Zn)=>!_.length&&p[Zn])&&o.complete()}},()=>{p[c]=!0,!a[c].length&&o.complete()}));return()=>{a=p=null}}):I.E}var f=r(9646),F=r(7272),k=r(4004),S=r(7359),v=r(4482);const q=(t,i)=>(t.push(i),t);var n=r(4650),l=r(77),E=r(8868),Q=r(7392),h=r(3546),u=r(9509);const Y=function(t){return{"image-active":t}};function N(t,i){if(1&t&&(n.TgZ(0,"div",16),n._UZ(1,"img",17),n.qZA()),2&t){const e=i.$implicit,o=i.index,a=n.oxw(2);n.Q6J("ngClass",n.VKq(3,Y,a.selectedIndex===o)),n.xp6(1),n.s9C("src",e.source,n.LSH),n.s9C("alt",e.alt)}}const z=function(t){return{active:t}};function j(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"span",18),n.NdJ("click",function(){const p=n.CHM(e).index,c=n.oxw(2);return n.KtG(c.selectImage(p))}),n.qZA()}if(2&t){const e=i.index,o=n.oxw(2);n.Q6J("ngClass",n.VKq(1,z,o.selectedIndex===e))}}const O=function(t){return{"background-color":t}};function L(t,i){if(1&t&&(n.TgZ(0,"div",19)(1,"span"),n._uU(2),n.qZA()()),2&t){const e=i.$implicit,o=n.oxw(2);n.Q6J("ngStyle",n.VKq(2,O,o.poke.getPokemonTypeColor(e.type.name))),n.xp6(2),n.hij(" ",e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1)," ")}}function $(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div")(1,"mat-card",1)(2,"div",2),n.YNc(3,N,2,5,"div",3),n.TgZ(4,"div",4),n.YNc(5,j,1,3,"span",5),n.qZA(),n.TgZ(6,"div",6)(7,"mat-icon",7),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onPreviousClick())}),n.qZA()(),n.TgZ(8,"div",8)(9,"mat-icon",9),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.onNextClick())}),n.qZA()()(),n.TgZ(10,"div",10)(11,"div",11)(12,"span",12),n._uU(13),n.ALo(14,"capitalizeAllText"),n.qZA(),n.TgZ(15,"span",13),n._uU(16),n.ALo(17,"number"),n.qZA()(),n.TgZ(18,"div",14),n.YNc(19,L,3,4,"div",15),n.qZA()()()()}if(2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngStyle",n.VKq(11,O,e.poke.getPokemonTypeColor(e.pokemon.types[0].type.name))),n.xp6(1),n.Q6J("ngForOf",e.images),n.xp6(2),n.Q6J("ngForOf",e.images),n.xp6(8),n.Oqu(n.lcZ(14,6,e.pokemon.name)),n.xp6(3),n.hij("#",n.xi3(17,8,e.pokemon.id,"3."),""),n.xp6(3),n.Q6J("ngForOf",e.pokemon.types)}}let H=(()=>{class t{constructor(e){this.poke=e,this.images=[],this.selectedIndex=0}ngOnChanges(){this.loadPokemonImageData()}loadPokemonImageData(){this.images=[],this.pokemon.sprites.front_default&&this.images.push({source:this.pokemon.sprites.front_default,alt:""}),this.pokemon.sprites.front_shiny&&this.images.push({source:this.pokemon.sprites.front_shiny,alt:""})}selectImage(e){this.selectedIndex=e}onPreviousClick(){0===this.selectedIndex?this.selectedIndex=this.images.length-1:this.selectedIndex--}onNextClick(){this.selectedIndex===this.images.length-1?this.selectedIndex=0:this.selectedIndex++}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.f))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-image-card"]],inputs:{pokemon:"pokemon"},features:[n.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[1,"pokemon-container"],[1,"pokemon-img-container",3,"ngStyle"],["class","circle",3,"ngClass",4,"ngFor","ngForOf"],[1,"circle-dot-container"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"btn-circle","btn-prev"],["aria-hidden","false","aria-label","","fontIcon","chevron_left",1,"icon-circle","icon-prev",3,"click"],[1,"btn-circle","btn-next"],["aria-hidden","false","aria-label","","fontIcon","chevron_right",1,"icon-circle","icon-next",3,"click"],[1,"pokemon-data-container"],[1,"pokemon-label-container"],[1,"name"],[1,"id"],[1,"pokemon-type-container"],["class","box",3,"ngStyle",4,"ngFor","ngForOf"],[1,"circle",3,"ngClass"],[3,"src","alt"],[1,"dot",3,"ngClass","click"],[1,"box",3,"ngStyle"]],template:function(e,o){1&e&&n.YNc(0,$,20,13,"div",0),2&e&&n.Q6J("ngIf",o.pokemon)},dependencies:[s.mk,s.sg,s.O5,s.PC,Q.Hw,h.a8,s.JJ,u.M],styles:[".pokemon-container[_ngcontent-%COMP%]{position:relative;max-width:450px;min-width:250px;width:450px;margin:auto;padding:0;border-radius:5px;box-shadow:#00000059 0 2px 5px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]{display:flex;height:18rem;align-items:center;justify-content:center;vertical-align:middle;border-radius:5px 5px 0 0;padding:0 5px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{height:20rem;width:20rem;margin-bottom:-90px;border-radius:10rem;background-color:#fff;margin-top:10px;display:none}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .circle-dot-container[_ngcontent-%COMP%]{position:absolute;right:0;left:0;top:330px;display:flex;justify-content:center;padding:0;margin-bottom:1rem}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{cursor:pointer;height:13px;width:13px;margin:0 5px;background-color:gray;border-radius:50%;display:inline-block;transition:opacity .6s ease;opacity:.5}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{opacity:1}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .image-active[_ngcontent-%COMP%]{display:block}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .btn-circle[_ngcontent-%COMP%]{position:absolute;top:155px;bottom:0;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;height:40px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]{left:0}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]{right:0}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]{opacity:.5;transition:all .15s ease;background-color:gray;border-radius:15px;height:30px;width:30px;cursor:pointer}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]:hover{color:#fff;opacity:.9}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]:active{opacity:.5}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .icon-prev[_ngcontent-%COMP%], .pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   .icon-next[_ngcontent-%COMP%]{font-size:30px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:auto;margin-left:15px;height:18rem;width:18rem}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:90px;padding:10px;margin-top:55px;font-weight:500;justify-content:space-evenly}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]   .pokemon-label-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]   .pokemon-label-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.4rem;margin:auto 10px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]   .pokemon-label-container[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{font-size:1.2rem;padding:6px 0 0;color:gray;height:30px;margin-top:7px;margin-right:9px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]   .pokemon-type-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:40px;margin-top:5px}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]   .pokemon-type-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:100%;text-align:center;border-radius:5px;margin:0 2px;font-size:1.1rem;color:#fff;padding:2px;display:flex}.pokemon-container[_ngcontent-%COMP%]   .pokemon-data-container[_ngcontent-%COMP%]   .pokemon-type-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto}"]}),t})();const R=function(t){return{width:t}};function V(t,i){if(1&t&&(n.TgZ(0,"tr",4)(1,"td",5),n._uU(2),n.qZA(),n.TgZ(3,"td",6)(4,"span"),n._uU(5),n.qZA()(),n.TgZ(6,"td",7)(7,"div",9),n._UZ(8,"div",10),n.qZA()(),n.TgZ(9,"td",11),n._uU(10),n.qZA(),n.TgZ(11,"td",11),n._uU(12),n.qZA()()),2&t){const e=i.$implicit;n.xp6(2),n.hij("",e.name,":"),n.xp6(3),n.Oqu(e.base_stats),n.xp6(3),n.Q6J("ngStyle",n.VKq(5,R,"calc(100% * "+e.base_stats+"/255)")),n.xp6(2),n.Oqu(e.min),n.xp6(2),n.Oqu(e.max)}}function K(t,i){if(1&t&&(n.TgZ(0,"div")(1,"mat-card",1)(2,"h2"),n._uU(3,"Base Stats"),n.qZA(),n.TgZ(4,"div")(5,"table",2)(6,"body"),n.YNc(7,V,13,7,"tr",3),n.TgZ(8,"tr",4)(9,"td",5),n._uU(10,"Total:"),n.qZA(),n.TgZ(11,"td",6),n._uU(12),n.qZA(),n._UZ(13,"td",7),n.TgZ(14,"td",8),n._uU(15,"Min"),n.qZA(),n.TgZ(16,"td",8),n._uU(17,"Max"),n.qZA()()()()()()()),2&t){const e=n.oxw();n.xp6(7),n.Q6J("ngForOf",e.stats),n.xp6(5),n.Oqu(e.total)}}let X=(()=>{class t{constructor(e){this.poke=e,this.stats=[],this.total=0}ngOnChanges(){this.loadPokemonStatistics()}loadPokemonStatistics(){this.total=0,this.stats=this.pokemon.stats.map(e=>(this.total+=Number(e.base_stat),{name:this.getFormatStats(e.stat.name),base_stats:e.base_stat,min:"hp"==e.stat.name?this.poke.getPokemonHPStat(e.base_stat,100):this.poke.getPokemonOthersStats(!1,e.base_stat,100),max:"hp"==e.stat.name?this.poke.getPokemonHPStat(e.base_stat,100,31,255):this.poke.getPokemonOthersStats(!0,e.base_stat,100,31,255)}))}getFormatStats(e){switch(e){case"special-attack":return"Sp. Atk";case"special-defense":return"Sp. Def";default:return e.replace(/-/g," ").replace(/\w\S*/g,o=>o.replace(/^\w/,a=>a.toUpperCase()))}}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.f))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-statistics-card"]],inputs:{pokemon:"pokemon"},features:[n.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[1,"statistics-container"],[1,"stats-table"],["class","stats-table-row",4,"ngFor","ngForOf"],[1,"stats-table-row"],[1,"name"],[1,"base-stats"],[1,"bar"],[1,"footer-stats"],[1,"statbar"],[1,"data",3,"ngStyle"],[1,"min-max"]],template:function(e,o){1&e&&n.YNc(0,K,18,2,"div",0),2&e&&n.Q6J("ngIf",o.pokemon)},dependencies:[s.sg,s.O5,s.PC,h.a8],styles:[".statistics-container[_ngcontent-%COMP%]{box-shadow:#00000059 0 2px 5px;position:relative;max-width:700px;width:700px;min-width:250px;margin:auto;padding:.5rem 1rem;border-radius:5px}.statistics-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.stats-table[_ngcontent-%COMP%]{width:100%}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]{width:100%;height:30px;font-size:1rem;margin:10px;vertical-align:middle}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{min-width:60px;width:80px;font-weight:500}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .base-stats[_ngcontent-%COMP%]{min-width:25px;text-align:end;padding-right:15px}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:100%}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .statbar[_ngcontent-%COMP%]{border:1px solid grey;border-radius:3px;height:20px!important;padding:1px;background-color:#80808026}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .statbar[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{background-color:#48a4e5;height:20px;border-radius:1px 0 0 1px}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .min-max[_ngcontent-%COMP%]{text-align:center}.stats-table[_ngcontent-%COMP%]   .stats-table-row[_ngcontent-%COMP%]   .footer-stats[_ngcontent-%COMP%]{min-width:50px;text-align:center;font-weight:500}"]}),t})();var M=r(8505);function B(t,i){if(1&t&&(n.TgZ(0,"div",9)(1,"span"),n._uU(2),n.qZA()()),2&t){const e=n.oxw(2);n.xp6(2),n.Oqu(e.getEvolveDescription())}}function G(t,i){1&t&&(n.TgZ(0,"div",10)(1,"span"),n._uU(2,"Basic Form"),n.qZA()())}function W(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div",1)(1,"div",2),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.goToPokemon())}),n.TgZ(2,"div",3),n._UZ(3,"img",4),n.qZA(),n.TgZ(4,"div",5)(5,"span",6),n._uU(6),n.ALo(7,"capitalizeAllText"),n.qZA(),n.YNc(8,B,3,1,"div",7),n.YNc(9,G,3,0,"ng-template",null,8,n.W1O),n.qZA()()()}if(2&t){const e=n.MAs(10),o=n.oxw();n.xp6(3),n.s9C("src",o.getImageSourceValue(o.pokemons),n.LSH),n.xp6(3),n.Oqu(n.lcZ(7,4,o.pokemons.name)),n.xp6(2),n.Q6J("ngIf",o.pokemonEvolveReason)("ngIfElse",e)}}let nn=(()=>{class t{constructor(e,o){this.http=e,this.router=o}ngOnInit(){this.prepareData()}prepareData(){this.http.getPokemon(this.pokemonSpeciesId).pipe((0,M.b)(e=>this.pokemons=e),(0,C.w)(e=>this.http.getPokemonSpecies(this.pokemonSpeciesId)),(0,M.b)(e=>this.species=e)).subscribe()}getImageSourceValue(e){return e.sprites.front_default}goToPokemon(){this.router.navigate([`/pokemons/${this.pokemons.name}`])}getEvolveDescription(){return"not implemented yet"}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.OE),n.Y36(d.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-chain-card"]],inputs:{pokemonSpeciesId:"pokemonSpeciesId",pokemonEvolveReason:"pokemonEvolveReason"},decls:1,vars:1,consts:[["class","pokemon-chain-card",4,"ngIf"],[1,"pokemon-chain-card"],[1,"pokemon-chain-card-link",3,"click"],[1,"image"],["alt","",3,"src"],[1,"description"],[1,"title"],["class","evolve-reason",4,"ngIf","ngIfElse"],["basicForm",""],[1,"evolve-reason"],[1,"basic-form"]],template:function(e,o){1&e&&n.YNc(0,W,11,6,"div",0),2&e&&n.Q6J("ngIf",o.pokemons)},dependencies:[s.O5,u.M],styles:[".pokemon-chain-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:flex;align-items:center}.pokemon-chain-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:80px;border:solid 2px #48a4e5;border-radius:10px;box-shadow:#00000026 0 2px 4px;background-color:#f7f7f7}.pokemon-chain-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin:0px 0px 0px 1rem;display:flex;flex-direction:column;justify-content:center}.pokemon-chain-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400}.pokemon-chain-card[_ngcontent-%COMP%]   .basic-form[_ngcontent-%COMP%]{color:#6495ed}.pokemon-chain-card[_ngcontent-%COMP%]   .pokemon-chain-card-link[_ngcontent-%COMP%]{padding:5px;display:flex;cursor:pointer;border-radius:5px}"]}),t})();function en(t,i){if(1&t&&(n.TgZ(0,"div",10),n._UZ(1,"img",11)(2,"app-pokemon-chain-card",12),n.qZA()),2&t){const e=i.$implicit,o=n.oxw(4);n.xp6(2),n.Q6J("pokemonSpeciesId",o.getID(e.species.url))("pokemonEvolveReason",e.evolution_details)}}function tn(t,i){if(1&t&&(n.TgZ(0,"div",9)(1,"div",10),n._UZ(2,"img",11)(3,"app-pokemon-chain-card",12),n.TgZ(4,"div",13),n.YNc(5,en,3,2,"div",14),n.qZA()()()),2&t){const e=i.$implicit,o=n.oxw(3);n.xp6(3),n.Q6J("pokemonSpeciesId",o.getID(e.species.url))("pokemonEvolveReason",e.evolution_details),n.xp6(2),n.Q6J("ngForOf",e.evolves_to)}}function on(t,i){if(1&t&&(n.TgZ(0,"div",4)(1,"div",5),n._UZ(2,"app-pokemon-chain-card",6),n.TgZ(3,"div",7),n.YNc(4,tn,6,3,"div",8),n.qZA()()()),2&t){const e=n.oxw(2);n.xp6(2),n.Q6J("pokemonSpeciesId",e.getID(e.evolutionChain.chain.species.url)),n.xp6(2),n.Q6J("ngForOf",e.evolutionChain.chain.evolves_to)}}function an(t,i){1&t&&(n.TgZ(0,"div",15)(1,"span"),n._uU(2,"This Pok\xe9mon does not evolve"),n.qZA()())}function cn(t,i){if(1&t&&(n.TgZ(0,"div")(1,"mat-card",1)(2,"h2"),n._uU(3,"Evolution Chain"),n.qZA(),n.YNc(4,on,5,2,"div",2),n.YNc(5,an,3,0,"ng-template",null,3,n.W1O),n.qZA()()),2&t){const e=n.MAs(6),o=n.oxw();n.xp6(4),n.Q6J("ngIf",o.isEvolutionAvailable())("ngIfElse",e)}}let rn=(()=>{class t{constructor(e){this.http=e}ngOnInit(){const e=this.getID(this.species.evolution_chain.url);this.http.getPokemonEvolutionChain(e).subscribe({next:o=>{this.evolutionChain=o}})}isEvolutionAvailable(){return 0!==this.evolutionChain.chain.evolves_to.length}getID(e){const o=e.split("pokeapi.co")[1].split("/").filter(a=>""!==a);return o[o.length-1]}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.OE))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-evolution-card"]],inputs:{pokemon:"pokemon",species:"species"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"container"],["class","evolution-chain-pokemon",4,"ngIf","ngIfElse"],["noEvolutionChain",""],[1,"evolution-chain-pokemon"],[1,"first-evolution-chain-pokemon"],[3,"pokemonSpeciesId"],[1,"second-evolution-chain-pokemon"],["class","second-chain-wrapper",4,"ngFor","ngForOf"],[1,"second-chain-wrapper"],[1,"chain-container"],["src","assets/right-arrow.png",1,"arrow"],[3,"pokemonSpeciesId","pokemonEvolveReason"],[1,"third-evolution-chain-pokemon"],["class","chain-container",4,"ngFor","ngForOf"],[1,"no-evolution-chain-pokemon"]],template:function(e,o){1&e&&n.YNc(0,cn,7,2,"div",0),2&e&&n.Q6J("ngIf",o.pokemon&&o.evolutionChain)},dependencies:[s.sg,s.O5,h.a8,nn],styles:[".container[_ngcontent-%COMP%]{box-shadow:#00000059 0 2px 5px;position:relative;margin:auto;padding:.5rem 1rem;border-radius:5px;width:1185px}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0}.container[_ngcontent-%COMP%]   .evolution-chain-pokemon[_ngcontent-%COMP%]{min-height:120px;justify-content:center;align-items:center;display:flex}.container[_ngcontent-%COMP%]   .first-evolution-chain-pokemon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .second-evolution-chain-pokemon[_ngcontent-%COMP%]{margin-left:3rem}.container[_ngcontent-%COMP%]   .second-evolution-chain-pokemon[_ngcontent-%COMP%]   .second-chain-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .third-evolution-chain-pokemon[_ngcontent-%COMP%]{margin-left:3rem}.container[_ngcontent-%COMP%]   .no-evolution-chain-pokemon[_ngcontent-%COMP%]{display:flex;height:60px;align-items:center;justify-content:center;margin-bottom:1rem}.container[_ngcontent-%COMP%]   .no-evolution-chain-pokemon[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%]{font-size:1rem;color:gray}.chain-container[_ngcontent-%COMP%]{display:flex;align-items:center}.arrow[_ngcontent-%COMP%]{margin-right:3rem;height:40px;width:40px}"]}),t})();function pn(t,i){if(1&t&&(n.TgZ(0,"div")(1,"mat-card",1)(2,"h2"),n._uU(3),n.ALo(4,"capitalizeAllText"),n.qZA(),n.TgZ(5,"div",2)(6,"ul",3)(7,"li")(8,"div",4),n._uU(9,"Species"),n.qZA(),n.TgZ(10,"div",5),n._uU(11),n.ALo(12,"capitalizeAllText"),n.qZA()(),n.TgZ(13,"li")(14,"div",4),n._uU(15,"Height"),n.qZA(),n.TgZ(16,"div",5),n._uU(17),n.qZA()(),n.TgZ(18,"li")(19,"div",4),n._uU(20,"Weight"),n.qZA(),n.TgZ(21,"div",5),n._uU(22),n.qZA()(),n.TgZ(23,"li")(24,"div",4),n._uU(25,"Abilities"),n.qZA(),n.TgZ(26,"div",5),n._uU(27),n.ALo(28,"capitalizeAllText"),n.qZA()()()()()()),2&t){const e=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,5,e.pokemon.name)),n.xp6(8),n.Oqu(n.lcZ(12,7,e.species)),n.xp6(6),n.Oqu(e.height),n.xp6(5),n.Oqu(e.weight),n.xp6(5),n.hij("",n.lcZ(28,9,e.abilities)," ")}}let sn=(()=>{class t{constructor(){this.species="",this.height="",this.weight="",this.abilities=""}ngOnChanges(){this.loadPokemonDetails()}loadPokemonDetails(){const e=String(this.pokemon.height),o=String(this.pokemon.weight);let a=this.slice(e,e.length-1,"."),p=this.slice(o,o.length-1,".");0===a.indexOf(".")&&(a="0"+a),0===p.indexOf(".")&&(p="0"+p),this.species=this.specie.genera.find(c=>"en"===c.language.name).genus,this.height=`${a} m`,this.weight=`${p} kg`,this.abilities=this.pokemon.abilities.map(c=>`${c.ability.name}${c.is_hidden?" (hidden)":""}`).join(", ")}slice(e,o,a){return e.slice(0,o)+a+e.slice(o)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-details-card"]],inputs:{pokemon:"pokemon",specie:"specie"},features:[n.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[1,"details-container"],[1,"details-wrapper"],[1,"details-list"],[1,"name"],[1,"value"]],template:function(e,o){1&e&&n.YNc(0,pn,29,11,"div",0),2&e&&n.Q6J("ngIf",o.pokemon&&o.specie)},dependencies:[s.O5,h.a8,u.M],styles:[".details-container[_ngcontent-%COMP%]{box-shadow:#00000059 0 2px 5px;position:relative;max-width:700px;width:700px;min-width:250px;margin:auto;padding:.5rem 1rem;border-radius:5px}.details-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.details-wrapper[_ngcontent-%COMP%]{margin:3px}.details-list[_ngcontent-%COMP%]{list-style:none;font-size:1rem}.details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0;display:flex}.details-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:100px;font-weight:500}"]}),t})();function mn(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div",1),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.goToPokemon())}),n.TgZ(1,"div",2),n._UZ(2,"img",3),n.qZA(),n.TgZ(3,"div",4)(4,"span",5),n._uU(5),n.ALo(6,"capitalizeAllText"),n.qZA(),n.TgZ(7,"span",6),n._uU(8," not implemented yet "),n.qZA()()()}if(2&t){const e=n.oxw();n.xp6(2),n.Q6J("src",e.getImageSourceValue(e.form),n.LSH),n.xp6(3),n.Oqu(n.lcZ(6,2,e.pokemon.name))}}let gn=(()=>{class t{constructor(e,o){this.http=e,this.router=o}ngOnChanges(e){this.http.getPokemonForm(this.pokemon.name).subscribe({next:o=>{this.form=o}})}getImageSourceValue(e){return e.sprites.front_default}goToPokemon(){this.router.navigate([`/pokemons/${this.pokemon.name}`])}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.OE),n.Y36(d.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-image-form-card"]],inputs:{pokemon:"pokemon"},features:[n.TTD],decls:1,vars:1,consts:[["class","pokemon-image-form",3,"click",4,"ngIf"],[1,"pokemon-image-form",3,"click"],[1,"image"],[3,"src"],[1,"description"],[1,"title"],[1,"sub-title"]],template:function(e,o){1&e&&n.YNc(0,mn,9,4,"div",0),2&e&&n.Q6J("ngIf",o.pokemon&&o.form)},dependencies:[s.O5,u.M],styles:[".pokemon-image-form[_ngcontent-%COMP%]{display:flex;padding:5px;cursor:pointer;border-radius:5px}.pokemon-image-form[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:flex;align-items:center}.pokemon-image-form[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:80px;border:solid 2px #48a4e5;border-radius:10px;box-shadow:#00000026 0 2px 4px;background-color:#f7f7f7;padding:5px}.pokemon-image-form[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:10px;justify-content:center}.pokemon-image-form[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:400}.pokemon-image-form[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-weight:400;font-size:13}"]}),t})();function ln(t,i){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"app-pokemon-image-form-card",5),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.Q6J("pokemon",e)}}function dn(t,i){if(1&t&&(n.TgZ(0,"div"),n.YNc(1,ln,2,1,"div",4),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",e.varieties)}}function hn(t,i){1&t&&(n.TgZ(0,"div",6)(1,"span"),n._uU(2,"This Pok\xe9mon does not have others form's"),n.qZA()())}function un(t,i){if(1&t&&(n.TgZ(0,"div")(1,"mat-card",1)(2,"h2"),n._uU(3,"Forms"),n.qZA(),n.YNc(4,dn,2,1,"div",2),n.YNc(5,hn,3,0,"ng-template",null,3,n.W1O),n.qZA()()),2&t){const e=n.MAs(6),o=n.oxw();n.xp6(4),n.Q6J("ngIf",o.varieties.length)("ngIfElse",e)}}let _n=(()=>{class t{constructor(e){this.http=e}ngOnChanges(e){this.varieties=this.getPokemonVarieties(this.species)}getPokemonVarieties(e){return e.varieties.map(o=>{if(o.is_default)return null;let a=this.http.getID(o.pokemon.url);return{name:o.pokemon.name,id:a}}).filter(o=>null!=o)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.OE))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-forms-card"]],inputs:{pokemon:"pokemon",species:"species"},features:[n.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[1,"container"],[4,"ngIf","ngIfElse"],["noForm",""],[4,"ngFor","ngForOf"],[3,"pokemon"],[1,"no-form-pokemon"]],template:function(e,o){1&e&&n.YNc(0,un,7,2,"div",0),2&e&&n.Q6J("ngIf",o.pokemon)},dependencies:[s.sg,s.O5,h.a8,gn],styles:[".container[_ngcontent-%COMP%]{box-shadow:#00000059 0 2px 5px;position:relative;margin:auto;padding:.5rem 1rem;border-radius:5px;width:1185px}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.no-form-pokemon[_ngcontent-%COMP%]{display:flex;height:60px;align-items:center;justify-content:center;margin-bottom:1rem}.no-form-pokemon[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%]{font-size:1rem;color:gray}"]}),t})();const Cn=function(t){return{"background-color":t}};function fn(t,i){if(1&t&&(n.TgZ(0,"td",5)(1,"div",6)(2,"span"),n._uU(3),n.ALo(4,"capitalizeAllText"),n.qZA()()()),2&t){const e=i.$implicit,o=n.oxw(2);n.xp6(1),n.Q6J("ngStyle",n.VKq(4,Cn,o.pokemonService.getPokemonTypeColor(e.name))),n.xp6(2),n.Oqu(n.lcZ(4,2,e.description))}}function kn(t,i){if(1&t&&(n.TgZ(0,"td",7)(1,"div",8)(2,"span"),n._uU(3),n.qZA()()()),2&t){const e=i.$implicit,o=n.oxw(2);n.xp6(1),n.s9C("ngClass",o.getClassByDamage(e.damage)),n.xp6(2),n.Oqu(e.damage)}}function xn(t,i){if(1&t&&(n.TgZ(0,"div")(1,"mat-card",1)(2,"h2"),n._uU(3,"Damage Taken"),n.qZA(),n.TgZ(4,"div",2)(5,"table")(6,"tbody")(7,"tr"),n.YNc(8,fn,5,6,"td",3),n.qZA(),n.TgZ(9,"tr"),n.YNc(10,kn,4,2,"td",4),n.qZA()()()()()()),2&t){const e=n.oxw();n.xp6(8),n.Q6J("ngForOf",e.pokemonTypeData.PokemonTypesData),n.xp6(2),n.Q6J("ngForOf",e.pokemonTypeData.PokemonTypesDamagedData)}}let Pn=(()=>{class t{constructor(e){this.pokemonService=e}getClassByDamage(e){switch(e){case.25:return"not-realy-effective";case.5:return"not-very-effective";case 0:return"no-effect";case 2:return"super-effective";case 4:return"mega-effective";default:return""}}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.f))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon-typechart-card"]],inputs:{pokemonData:"pokemonData",pokemonTypeData:"pokemonTypeData"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"container"],[1,"typechart-wrapper"],["class","type",4,"ngFor","ngForOf"],["class","value-wrapper",4,"ngFor","ngForOf"],[1,"type"],[1,"type-wrapper",3,"ngStyle"],[1,"value-wrapper"],[1,"value",3,"ngClass"]],template:function(e,o){1&e&&n.YNc(0,xn,11,2,"div",0),2&e&&n.Q6J("ngIf",o.pokemonData)},dependencies:[s.mk,s.sg,s.O5,s.PC,h.a8,u.M],styles:[".container[_ngcontent-%COMP%]{box-shadow:#00000059 0 2px 5px;position:relative;margin:auto;padding:.5rem 1rem;border-radius:5px;width:1185px}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.typechart-wrapper[_ngcontent-%COMP%]{width:100%;min-width:250px;overflow:auto;text-align:center}.typechart-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border-spacing:2px 1px;margin:5px auto}.typechart-wrapper[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{border:solid 1px #bdbdbd;min-width:55px;color:#fff;border-radius:3px 3px 0 0;height:40px;font-size:.9rem}.typechart-wrapper[_ngcontent-%COMP%]   .type-wrapper[_ngcontent-%COMP%]{width:90%;margin:auto;border:solid 1px grey;height:30px;border-radius:4px;text-align:center;vertical-align:middle;display:flex}.typechart-wrapper[_ngcontent-%COMP%]   .type-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto}.typechart-wrapper[_ngcontent-%COMP%]   .value-wrapper[_ngcontent-%COMP%]{border:solid 1px #bdbdbd;height:30px;color:gray;border-radius:0 0 3px 3px;padding:1px}.typechart-wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{width:100%;height:100%;font-size:1rem;margin:auto;display:flex;text-align:center;justify-content:center;border-radius:2px}.typechart-wrapper[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto}.typechart-wrapper[_ngcontent-%COMP%]   .not-realy-effective[_ngcontent-%COMP%]{background-color:#df7930;color:#fff}.typechart-wrapper[_ngcontent-%COMP%]   .not-very-effective[_ngcontent-%COMP%]{background-color:#ce251c;color:#fff}.typechart-wrapper[_ngcontent-%COMP%]   .no-effect[_ngcontent-%COMP%]{background-color:#333;color:#fff}.typechart-wrapper[_ngcontent-%COMP%]   .super-effective[_ngcontent-%COMP%]{background-color:#65ba3b;color:#fff}.typechart-wrapper[_ngcontent-%COMP%]   .mega-effective[_ngcontent-%COMP%]{background-color:#3e7bd0;color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:6px;border-radius:2px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgba(153,153,153,.5)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#888;cursor:pointer}"]}),t})();function vn(t,i){if(1&t&&(n.TgZ(0,"div",2),n._UZ(1,"app-pokemon-image-card",3)(2,"app-pokemon-details-card",4)(3,"app-pokemon-statistics-card",3)(4,"app-pokemon-typechart-card",5)(5,"app-pokemon-evolution-card",6)(6,"app-pokemon-forms-card",6),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("pokemon",e.pokemonMainData),n.xp6(1),n.Q6J("pokemon",e.pokemonMainData)("specie",e.pokemonSpecieData),n.xp6(1),n.Q6J("pokemon",e.pokemonMainData),n.xp6(1),n.Q6J("pokemonData",e.pokemonMainData)("pokemonTypeData",e.pokemonTypeChartData),n.xp6(1),n.Q6J("pokemon",e.pokemonMainData)("species",e.pokemonSpecieData),n.xp6(1),n.Q6J("pokemon",e.pokemonMainData)("species",e.pokemonSpecieData)}}const On=[{path:"",component:(()=>{class t{constructor(e,o,a){this.route=e,this.httpService=o,this.activeRoute=a,this.isLoading=!1,this.pokemonMainData=null,this.pokemonSpecieData=null,this.pokemonFormData=null,this.pokemonEvolutionChainData=null,this.pokemonTypeChartData=null}ngOnInit(){this.activeRoute.params.subscribe(e=>{this.loadPokemonData()})}loadPokemonData(){this.isLoading=!0;const e=this.getPokemonId();this.httpService.getPokemon(e).pipe((0,C.w)(o=>P([(0,f.of)(o),this.httpService.getPokemonSpecies(e)])),(0,C.w)(([o,a])=>P([(0,f.of)(o),(0,f.of)(a),this.httpService.getPokemonForm(e),this.httpService.getPokemonEvolutionChain(this.httpService.getID(a.evolution_chain.url)),this.getPokemonTypeChartData(o)]))).subscribe({next:([o,a,p,c,m])=>{this.pokemonMainData=o,this.pokemonSpecieData=a,this.pokemonFormData=p,this.pokemonEvolutionChainData=c,this.pokemonTypeChartData=m,this.isLoading=!1}})}getPokemonTypeChartData(e){return this.httpService.getTypes().pipe((0,C.w)(o=>(0,F.z)(...e.types.map(a=>this.httpService.getPokemonTypes(a.type.name).pipe((0,k.U)(p=>{const c=[];return p.damage_relations.double_damage_from.map(m=>{c.push({type:m.name,damage:2})}),p.damage_relations.half_damage_from.map(m=>{c.push({type:m.name,damage:.5})}),p.damage_relations.no_damage_from.map(m=>{c.push({type:m.name,damage:0})}),c})))).pipe(function J(){return(0,v.e)((t,i)=>{(function U(t,i){return(0,v.e)((0,S.U)(t,i,arguments.length>=2,!1,!0))})(q,[])(t).subscribe(i)})}(),(0,k.U)(a=>o.results.map(p=>{let c=a[0].filter(g=>g.type==p.name);a.length>=2&&(c=[...c,...a[1]].filter(g=>g.type==p.name));let m=c.length<=0?1:c.reduce((g,_)=>(g.damage*=_.damage,g)).damage;return{name:p.name,damage:m}})),(0,k.U)(a=>({PokemonTypesData:o.results.map(c=>({name:c.name,description:c.name.substr(0,3)})),PokemonTypesDamagedData:a})))))}getPokemonId(){return String(this.route.snapshot.paramMap.get("pokemon"))||""}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.gz),n.Y36(l.OE),n.Y36(d.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-pokemon"]],decls:2,vars:2,consts:[[3,"isLoading"],["class","container",4,"ngIf"],[1,"container"],[3,"pokemon"],[3,"pokemon","specie"],[3,"pokemonData","pokemonTypeData"],[3,"pokemon","species"]],template:function(e,o){1&e&&(n._UZ(0,"app-loader",0),n.YNc(1,vn,7,10,"div",1)),2&e&&(n.Q6J("isLoading",o.isLoading),n.xp6(1),n.Q6J("ngIf",!o.isLoading))},dependencies:[s.O5,E.R,H,X,rn,sn,_n,Pn],styles:['.container[_ngcontent-%COMP%]{margin-top:.5rem;display:grid;grid-template-areas:"image details" "image statistics" "typechart typechart" "evolution evolution" "forms forms"}app-pokemon-image-card[_ngcontent-%COMP%]{grid-area:image;display:flex;justify-content:flex-end;margin-right:1rem}app-pokemon-details-card[_ngcontent-%COMP%]{grid-area:details;display:flex;justify-content:flex-start;margin-bottom:15px;margin-left:1rem}app-pokemon-statistics-card[_ngcontent-%COMP%]{grid-area:statistics;display:flex;justify-content:flex-start;margin-left:1rem}app-pokemon-typechart-card[_ngcontent-%COMP%]{grid-area:typechart;margin-top:15px}app-pokemon-evolution-card[_ngcontent-%COMP%]{grid-area:evolution;margin-top:15px}app-pokemon-forms-card[_ngcontent-%COMP%]{grid-area:forms;margin-top:15px}']}),t})()}];let Mn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.Bz.forChild(On),d.Bz]}),t})();var yn=r(40),bn=r(5503);let Tn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,Mn,y.N,yn.q,bn.D]}),t})()}}]);