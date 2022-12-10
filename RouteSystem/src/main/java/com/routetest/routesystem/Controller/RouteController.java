package com.routetest.routesystem.Controller;

import com.routetest.routesystem.Beans.Route;
import com.routetest.routesystem.Dto.RouteCreateRequestDto;
import com.routetest.routesystem.Service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/route")
public class RouteController {

    @Autowired
    private RouteService routeService;

    @PostMapping("/save")
    public void addRoute(@RequestBody RouteCreateRequestDto routeCreateRequestDto){
        routeService.addRoute(routeCreateRequestDto);
    }

    @GetMapping("/{id}")
    public Route getRouteById(@PathVariable String id){
        return routeService.getRouteById(id);
    }

    @GetMapping("/all")
    public List<Route> getAllRoutes(){
        return routeService.getAllRoutes();
    }

    @DeleteMapping("/{id}")
    public void deleteRouteById(@PathVariable String id){
        routeService.deleteRouteById(id);
    }

    @DeleteMapping("/all")
    public void deleteAllRoutes(){
        routeService.deleteAllRoutes();
    }

    @PutMapping("/update")
    public void updateRoute(@RequestBody RouteCreateRequestDto routeCreateRequestDto){
        routeService.updateRoute(routeCreateRequestDto);
    }
}
