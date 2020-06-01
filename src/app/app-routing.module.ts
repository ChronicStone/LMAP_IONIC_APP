import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { DataResolverService } from "./services/data.resolver.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "sessions",
    loadChildren: () =>
      import("./sessions-list/sessions-list.module").then(
        (m) => m.SessionsListPageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "session",
    loadChildren: () =>
      import("./session/session.module").then((m) => m.SessionPageModule),
  },
  {
    path: "session/:id",
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import("./session/session.module").then((m) => m.SessionPageModule),
  },
  {
    path: "assessment-check/:id",
    resolve: {
      special: DataResolverService,
    },
    loadChildren: () =>
      import("./assessment-check/assessment-check.module").then(
        (m) => m.AssessmentCheckPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
