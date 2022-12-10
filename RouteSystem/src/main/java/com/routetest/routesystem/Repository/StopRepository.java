package com.routetest.routesystem.Repository;

import com.routetest.routesystem.Beans.Stop;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StopRepository extends MongoRepository<Stop, String> {
}
