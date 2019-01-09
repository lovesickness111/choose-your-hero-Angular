import { NgModule } from '@angular/core';
// không cần import bất cứ componet nào trong routing nên ta xóa declaration+ commonModule
// ta cần config Routes trong RouterModule của angular nên ta thêm nó vào
import { Routes, RouterModule } from '@angular/router';
// route đến heroes component
import { HeroesComponent } from './heroes/heroes.component';
// route đến Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
// route đến detail
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { from } from 'rxjs';

// khai báo mảng các route dẫn đến các màn hình con trong phân hệ này

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // export RouteModule khiến router directives có thể được sử dụng trong component -> return về đường dẫn
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ta đã khởi tạo thành công routing cho module này, bây giờ cần tạo routes cho các components