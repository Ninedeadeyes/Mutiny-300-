var gdjs;(function(a){const l=GlobalPIXIModule.PIXI;a.PixiFiltersTools.registerFilterCreator("BlackAndWhite",new class extends a.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,t){const e=new l.filters.ColorMatrixFilter;return e.blackAndWhite(!1),e}updatePreRender(r,t){}updateDoubleParameter(r,t,e){const i=r;t==="opacity"&&(i.alpha=a.PixiFiltersTools.clampValue(e,0,1))}updateStringParameter(r,t,e){}updateBooleanParameter(r,t,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=black-and-white-pixi-filter.js.map