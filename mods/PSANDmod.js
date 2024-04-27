/*
Sandboxels Plus v1

Changelog - 1/25/24 - v1
 - Made the mod :|
 -Added pink sand and pink particles
 
*/
elements.pparticle = {
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    color: ["#FF11FF","#FFFF11"],
    reactions: {},
};

elements.psand = {
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    color: ["#FF00FF","#00FF00"],
    breakInto: "pparticle",
    breakIntoColor: "#FF01FF",
    reactions: {},
};
