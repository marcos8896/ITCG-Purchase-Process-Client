import { Provider } from 'app/models/provider';
import { Component, OnInit } from '@angular/core';
  
import { ProviderService } from 'app/services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = []

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.all()
    .subscribe( res => this.providers = res)   
  }

}
