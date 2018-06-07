usuarios.controller('usuarios_lista', function($scope, UsuariosSrv){
    $scope.get = function(i){
        $scope.loading = true;
        UsuariosSrv.RetornoUsuarios.get({username: i}).$promise.then(function(data){
            $scope.submitted = true;
            $scope.Notfound = false;
            $scope.results = UsuariosSrv.RetornoUsuarios.get({username: i});
        }, function(error){
            $scope.submitted = false;
            $scope.Notfound = true;
        }).finally(function(){
            $scope.loading = false;
        });

        UsuariosSrv.RetornoUsuarios.query({teste: i}).$promise.then(function(data){
            $scope.repos = UsuariosSrv.RetornoRepoUsuarios.query({teste: i});
        }, function(error){
            $scope.Notfound = true;
        });
    }
});