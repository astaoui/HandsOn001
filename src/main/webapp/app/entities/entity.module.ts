import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HandsOn001RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { HandsOn001CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { HandsOn001LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { HandsOn001DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { HandsOn001TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { HandsOn001EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { HandsOn001JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { HandsOn001JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        HandsOn001RegionMySuffixModule,
        HandsOn001CountryMySuffixModule,
        HandsOn001LocationMySuffixModule,
        HandsOn001DepartmentMySuffixModule,
        HandsOn001TaskMySuffixModule,
        HandsOn001EmployeeMySuffixModule,
        HandsOn001JobMySuffixModule,
        HandsOn001JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HandsOn001EntityModule {}
