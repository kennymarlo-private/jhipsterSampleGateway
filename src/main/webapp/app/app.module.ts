import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleGatewaySharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleGatewayHomeModule } from './home/home.module';
import { JhipsterSampleGatewayAdminModule } from './admin/admin.module';
import { JhipsterSampleGatewayAccountModule } from './account/account.module';
import { JhipsterSampleGatewayEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleGatewaySharedModule,
        JhipsterSampleGatewayHomeModule,
        JhipsterSampleGatewayAdminModule,
        JhipsterSampleGatewayAccountModule,
        JhipsterSampleGatewayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleGatewayAppModule {}
