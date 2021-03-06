import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ExpenseQueryService } from './ExpenseQuery.Service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseDeletionService } from './expenseDeletion.service';
import { ExpenseCreationService } from './expenseCreation.service';
import { ExpenseDocumentorComponent } from './expense-documentor/expense-documentor.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpenseModificationService } from './expenseModification.service';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
//import { SharedDataService } from './sharedData.service';



@NgModule({
  declarations: [
    AppComponent,
    ExpenseDocumentorComponent,
    ReceiptComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Observable
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //InMemoryWebApiModule.forRoot(SharedDataService)
   
  ],
  providers: [ExpenseQueryService,
    ExpenseDeletionService,
    ExpenseCreationService,
    ExpenseModificationService,
    //SharedDataService
],
  bootstrap: [AppComponent],
})
export class AppModule { }
