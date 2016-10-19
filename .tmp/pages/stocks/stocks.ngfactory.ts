/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../providers/allstocks-service';
import * as import4 from './stocks';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from 'ionic-angular/components/loading/loading';
import * as import11 from 'ionic-angular/navigation/nav-controller';
import * as import12 from 'ionic-angular/navigation/nav-params';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from 'ionic-angular/components/toolbar/toolbar';
import * as import16 from 'ionic-angular/components/navbar/navbar';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import18 from 'ionic-angular/components/content/content';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from '@angular/core/src/linker/template_ref';
import * as import31 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import32 from 'ionic-angular/components/card/card';
import * as import33 from 'ionic-angular/components/grid/grid';
import * as import34 from 'ionic-angular/components/icon/icon';
var renderType_StocksPage_Host:import0.RenderComponentType = (null as any);
class _View_StocksPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AllStocksService_0_4:import3.AllStocksService;
  _StocksPage_0_5:import4.StocksPage;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_StocksPage_Host0,renderType_StocksPage_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-stocks',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_StocksPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AllStocksService_0_4 = new import3.AllStocksService(this.parentInjector.get(import9.Http));
    this._StocksPage_0_5 = new import4.StocksPage(this._AllStocksService_0_4,this.parentInjector.get(import10.LoadingController),this.parentInjector.get(import11.NavController),this.parentInjector.get(import12.NavParams));
    this._appEl_0.initComponent(this._StocksPage_0_5,([] as any[]),compView_0);
    compView_0.create(this._StocksPage_0_5,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AllStocksService) && (0 === requestNodeIndex))) { return this._AllStocksService_0_4; }
    if (((token === import4.StocksPage) && (0 === requestNodeIndex))) { return this._StocksPage_0_5; }
    return notFoundResult;
  }
}
function viewFactory_StocksPage_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_StocksPage_Host === (null as any))) { (renderType_StocksPage_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_StocksPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const StocksPageNgFactory:import14.ComponentFactory<import4.StocksPage> = new import14.ComponentFactory<import4.StocksPage>('page-stocks',viewFactory_StocksPage_Host0,import4.StocksPage);
const styles_StocksPage:any[] = ([] as any[]);
var renderType_StocksPage:import0.RenderComponentType = (null as any);
class _View_StocksPage0 extends import1.AppView<import4.StocksPage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import15.Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Navbar_3_4:import16.Navbar;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _ToolbarTitle_5_4:import17.ToolbarTitle;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _Content_10_4:import18.Content;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import19.NgFor;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_StocksPage0,renderType_StocksPage,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import15.Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this.renderer.setElementAttribute(this._el_3,'color','hometab');
    this._appEl_3 = new import2.AppElement(3,1,this,this._el_3);
    var compView_3:any = import23.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import16.Navbar(this.parentInjector.get(import24.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import11.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4,([] as any[]),compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_5 = new import2.AppElement(5,3,this,this._el_5);
    var compView_5:any = import25.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(5),this._appEl_5);
    this._ToolbarTitle_5_4 = new import17.ToolbarTitle(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import15.Toolbar,(null as any)),this._Navbar_3_4);
    this._appEl_5.initComponent(this._ToolbarTitle_5_4,([] as any[]),compView_5);
    this._text_6 = this.renderer.createText((null as any),'Stocks',(null as any));
    compView_5.create(this._ToolbarTitle_5_4,[([] as any[]).concat([this._text_6])],(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_4,
        this._el_5,
        this._text_7
      ]
      )
    ]
    ,(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_10 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','home-background');
    this.renderer.setElementAttribute(this._el_10,'padding','');
    this._appEl_10 = new import2.AppElement(10,(null as any),this,this._el_10);
    var compView_10:any = import26.viewFactory_Content0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Content_10_4 = new import18.Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import24.App),this.parentInjector.get(import27.Keyboard),this.parentInjector.get(import28.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import29.Tabs,(null as any)));
    this._appEl_10.initComponent(this._Content_10_4,([] as any[]),compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_12 = new import2.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import30.TemplateRef_(this._appEl_12,viewFactory_StocksPage1);
    this._NgFor_12_6 = new import19.NgFor(this._appEl_12.vcRef,this._TemplateRef_12_5,this.parentInjector.get(import31.IterableDiffers),this.ref);
    this._text_13 = this.renderer.createText((null as any),'\n',(null as any));
    compView_10.create(this._Content_10_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_11,
        this._appEl_12,
        this._text_13
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n  \n',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ToolbarTitle_5_4; }
    if (((token === import16.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Navbar_3_4; }
    if (((token === import15.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Header_1_3; }
    if (((token === import30.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import19.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6; }
    if (((token === import18.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Content_10_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    const currVal_0:any = 'hometab';
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Navbar_3_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_10_4.ngOnInit(); }
    changes = (null as any);
    const currVal_4:any = this.context.stockData;
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgFor_12_6.ngForOf = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._NgFor_12_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_12_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Navbar_3_4._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_3_4._sbPadding;
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_10_4._sbPadding;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_10,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_10_4.ngOnDestroy();
  }
}
export function viewFactory_StocksPage0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.StocksPage> {
  if ((renderType_StocksPage === (null as any))) { (renderType_StocksPage = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_StocksPage,{})); }
  return new _View_StocksPage0(viewUtils,parentInjector,declarationEl);
}
class _View_StocksPage1 extends import1.AppView<any> {
  _el_0:any;
  _Card_0_3:import32.Card;
  _text_1:any;
  _el_2:any;
  _CardHeader_2_3:import32.CardHeader;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _CardContent_8_3:import32.CardContent;
  _text_9:any;
  _el_10:any;
  _Grid_10_3:import33.Grid;
  _text_11:any;
  _el_12:any;
  _Row_12_3:import33.Row;
  _text_13:any;
  _el_14:any;
  _Col_14_3:import33.Col;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _el_20:any;
  _Icon_20_3:import34.Icon;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _Col_24_3:import33.Col;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _el_30:any;
  _Icon_30_3:import34.Icon;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _Row_35_3:import33.Row;
  _text_36:any;
  _el_37:any;
  _Col_37_3:import33.Col;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _el_43:any;
  _Icon_43_3:import34.Icon;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _Col_47_3:import33.Col;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _el_53:any;
  _Icon_53_3:import34.Icon;
  _text_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_StocksPage1,renderType_StocksPage,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-card',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','card-round');
    this._Card_0_3 = new import32.Card(this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-card-header',(null as any));
    this._CardHeader_2_3 = new import32.CardHeader();
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'div',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'ion-card-content',(null as any));
    this._CardContent_8_3 = new import32.CardContent();
    this._text_9 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'ion-grid',(null as any));
    this._Grid_10_3 = new import33.Grid();
    this._text_11 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'ion-row',(null as any));
    this._Row_12_3 = new import33.Row();
    this._text_13 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_14,'width-50','');
    this._Col_14_3 = new import33.Col();
    this._text_15 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'h2',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Closing Qty',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_14,'span',(null as any));
    this._el_20 = this.renderer.createElement(this._el_19,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','card-titler');
    this.renderer.setElementAttribute(this._el_20,'name','pie');
    this.renderer.setElementAttribute(this._el_20,'role','img');
    this._Icon_20_3 = new import34.Icon(this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_20),this.renderer);
    this._text_21 = this.renderer.createText(this._el_20,'',(null as any));
    this._text_22 = this.renderer.createText(this._el_14,'\n          ',(null as any));
    this._text_23 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_12,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_24,'width-50','');
    this._Col_24_3 = new import33.Col();
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'h2',(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Closing Value',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_24,'span',(null as any));
    this._el_30 = this.renderer.createElement(this._el_29,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','card-titler');
    this.renderer.setElementAttribute(this._el_30,'name','podium');
    this.renderer.setElementAttribute(this._el_30,'role','img');
    this._Icon_30_3 = new import34.Icon(this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_30),this.renderer);
    this._text_31 = this.renderer.createText(this._el_30,'',(null as any));
    this._text_32 = this.renderer.createText(this._el_24,'\n          ',(null as any));
    this._text_33 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._text_34 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_10,'ion-row',(null as any));
    this._Row_35_3 = new import33.Row();
    this._text_36 = this.renderer.createText(this._el_35,'\n          ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_35,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_37,'width-50','');
    this._Col_37_3 = new import33.Col();
    this._text_38 = this.renderer.createText(this._el_37,'\n            ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_37,'h2',(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'Sales Value',(null as any));
    this._text_41 = this.renderer.createText(this._el_37,'\n            ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_37,'span',(null as any));
    this._el_43 = this.renderer.createElement(this._el_42,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_43,'class','card-titler');
    this.renderer.setElementAttribute(this._el_43,'name','stats');
    this.renderer.setElementAttribute(this._el_43,'role','img');
    this._Icon_43_3 = new import34.Icon(this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_43),this.renderer);
    this._text_44 = this.renderer.createText(this._el_43,'',(null as any));
    this._text_45 = this.renderer.createText(this._el_37,'\n          ',(null as any));
    this._text_46 = this.renderer.createText(this._el_35,'\n          ',(null as any));
    this._el_47 = this.renderer.createElement(this._el_35,'ion-col',(null as any));
    this.renderer.setElementAttribute(this._el_47,'width-50','');
    this._Col_47_3 = new import33.Col();
    this._text_48 = this.renderer.createText(this._el_47,'\n            ',(null as any));
    this._el_49 = this.renderer.createElement(this._el_47,'h2',(null as any));
    this._text_50 = this.renderer.createText(this._el_49,'Profit',(null as any));
    this._text_51 = this.renderer.createText(this._el_47,'\n            ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_47,'span',(null as any));
    this._el_53 = this.renderer.createElement(this._el_52,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_53,'class','card-titler');
    this.renderer.setElementAttribute(this._el_53,'name','ribbon');
    this.renderer.setElementAttribute(this._el_53,'role','img');
    this._Icon_53_3 = new import34.Icon(this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_53),this.renderer);
    this._text_54 = this.renderer.createText(this._el_53,'',(null as any));
    this._text_55 = this.renderer.createText(this._el_47,'\n          ',(null as any));
    this._text_56 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._text_57 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._text_58 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_59 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this._expr_7 = import8.UNINITIALIZED;
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    this._expr_11 = import8.UNINITIALIZED;
    this._expr_12 = import8.UNINITIALIZED;
    this._expr_13 = import8.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._el_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._el_53,
      this._text_54,
      this._text_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._text_59
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.CardHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._CardHeader_2_3; }
    if (((token === import34.Icon) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Icon_20_3; }
    if (((token === import33.Col) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Col_14_3; }
    if (((token === import34.Icon) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._Icon_30_3; }
    if (((token === import33.Col) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._Col_24_3; }
    if (((token === import33.Row) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._Row_12_3; }
    if (((token === import34.Icon) && ((43 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._Icon_43_3; }
    if (((token === import33.Col) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._Col_37_3; }
    if (((token === import34.Icon) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 54)))) { return this._Icon_53_3; }
    if (((token === import33.Col) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 55)))) { return this._Col_47_3; }
    if (((token === import33.Row) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 56)))) { return this._Row_35_3; }
    if (((token === import33.Grid) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 57)))) { return this._Grid_10_3; }
    if (((token === import32.CardContent) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 58)))) { return this._CardContent_8_3; }
    if (((token === import32.Card) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 59)))) { return this._Card_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = 'pie';
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Icon_20_3.name = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = 'podium';
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Icon_30_3.name = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_8:any = 'stats';
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._Icon_43_3.name = currVal_8;
      this._expr_8 = currVal_8;
    }
    const currVal_11:any = 'ribbon';
    if (import5.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._Icon_53_3.name = currVal_11;
      this._expr_11 = currVal_11;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import5.interpolate(1,'card-tab-bg-',this.context.$implicit.color,' font-bold');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'className',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import5.interpolate(1,'',this.context.$implicit.daterange,'');
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_5,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = this._Icon_20_3._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_20,'hide',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import5.interpolate(1,' ',this.context.$implicit.clqty,'');
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_21,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_30_3._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_30,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = import5.interpolate(1,' ',this.context.$implicit.clqvalue,'');
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_31,currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_9:any = this._Icon_43_3._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_43,'hide',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = import5.interpolate(1,' ',this.context.$implicit.salvalue,'');
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_44,currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_12:any = this._Icon_53_3._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_53,'hide',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = import5.interpolate(1,' ',this.context.$implicit.profit,'%');
    if (import5.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_54,currVal_13);
      this._expr_13 = currVal_13;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_20_3.ngOnDestroy();
    this._Icon_30_3.ngOnDestroy();
    this._Icon_43_3.ngOnDestroy();
    this._Icon_53_3.ngOnDestroy();
  }
}
function viewFactory_StocksPage1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_StocksPage1(viewUtils,parentInjector,declarationEl);
}