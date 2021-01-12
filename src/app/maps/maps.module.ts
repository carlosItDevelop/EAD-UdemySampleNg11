import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GoogleMapComponent}  from './google-map/googlemap.component';
import { LeafletMapComponent}  from './leaflet-map/leafletmap.component';
import { MapRoutes } from './maps.routing';

@NgModule({
	declarations: [
		GoogleMapComponent,
		LeafletMapComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
      MatMenuModule,
      FlexLayoutModule,
      TranslateModule,
		RouterModule.forChild(MapRoutes),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'})
	]
})
export class MapsModule { }
