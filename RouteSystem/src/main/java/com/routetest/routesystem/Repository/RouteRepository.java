package com.routetest.routesystem.Repository;

import com.routetest.routesystem.Beans.Route;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends MongoRepository<Route, String>{

}
