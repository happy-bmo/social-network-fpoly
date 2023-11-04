var app = angular.module("admin-app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/assets/admin/manage/_info.html"
  })
  .when("/list-user", {
    templateUrl : "/assets/admin/list_user/_info.html"
  })
  .when("/manage-user", {
    templateUrl : "/assets/admin/add_user/_form.html"
  })
  .when("/manage-post", {
    templateUrl : "/assets/admin/list_post/info_post.html"
  })
  .when("/approval-post", {
    templateUrl : "/assets/admin/approval_post/_approval.html"
  })
});
