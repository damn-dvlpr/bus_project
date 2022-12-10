package com.routetest.routesystem;

import com.routetest.routesystem.Repository.RouteRepository;
import com.routetest.routesystem.Repository.StopRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = {RouteRepository.class, StopRepository.class})
public class RouteSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(RouteSystemApplication.class, args);
    }

}
