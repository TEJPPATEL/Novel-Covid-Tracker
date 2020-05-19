import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';
import { NewsModel } from './news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  
  news:any[] = [];
 
  constructor(private newsservice:NewsService,private spinner :NgxSpinnerService) { }
 
  ngOnInit() {
    this.spinner.show();
    // const loading = document.createElement('ion-loading');
    // loading.message = 'Please wait...';
    // // loading.duration = 2000;
  
    // document.body.appendChild(loading);
    // loading.present();
  // async function presentLoading() {
  //     const loading = await this.loadingController.create({
  //       message: 'Please wait...',
  //       duration: 2000
  //     });
  //     await loading.present();

  //     const { role, data } = await loading.onDidDismiss();
  //     console.log('Loading dismissed!');
  //   }
 
  //  presentLoading().then(data =>{
     
  //  })
  
    // loading.present();

    this.newsservice.getNews().subscribe(data =>{
      // loading.dismiss();
      // this.spinner.show();
      console.log(data.articles)
     data.articles.map(data => {
       this.news.push({ urlToImage : data.urlToImage , title:data.title , description : data.description , publishedAt : data.publishedAt.split("T")})
     });
     this.spinner.hide()
      // this.dataLoaded = false;

    });
  err =>{
    console.log("er" + err);
    this.spinner.show();
    // loading.message = "Please Check Your Internet Connection and Try Again after while";
    // loading.present();
  }
   
  }
  clicked(event)
  {
    this.spinner.show();
    const loading = document.createElement('ion-loading');
    loading.message = 'Please wait...';
    loading.duration = 2000;

    document.body.appendChild(loading);
    loading.present();
    this.newsservice.getNewsByName(event.detail.value).subscribe(data => {
      this.spinner.hide();
     loading.dismiss();
      data.articles.map(data => {
        this.news.push({ urlToImage: data.urlToImage, title: data.title, description: data.description, publishedAt: data.publishedAt.split("T") })
      });
      console.log(data);
      // this.dataLoaded = false;
    })
    // console.log();
  }
}
