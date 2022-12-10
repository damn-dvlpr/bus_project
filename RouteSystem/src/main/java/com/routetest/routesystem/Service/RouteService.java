package com.routetest.routesystem.Service;

import com.routetest.routesystem.Beans.Route;
import com.routetest.routesystem.Dto.RouteCreateRequestDto;
import com.routetest.routesystem.Beans.Stop;
import com.routetest.routesystem.Repository.RouteRepository;
import com.routetest.routesystem.Repository.StopRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RouteService {

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private StopRepository stopRepository;

    public void addRoute(RouteCreateRequestDto routeCreateRequestDto){
        List<Stop> stops = stopRepository.findAllById(routeCreateRequestDto.getStops());
        Route route = Route.builder()
                .name(routeCreateRequestDto.getName())
                .status(routeCreateRequestDto.getStatus())
                .direction(routeCreateRequestDto.getDirection())
                .stops(stops)
                .build();
        routeRepository.save(route);
    }

    public Route getRouteById(String id){
        Optional<Route> optional = routeRepository.findById(id);
        return optional.get();
    }

    public List<Route> getAllRoutes() {
        Optional<List<Route>> optionalRouteList = Optional.of(routeRepository.findAll());
        return optionalRouteList.get();
    }

    public void updateRoute(RouteCreateRequestDto routeCreateRequestDto){
        List<Stop> stops = stopRepository.findAllById(routeCreateRequestDto.getStops());
        Route route = Route.builder()
                .id(routeCreateRequestDto.getId())
                .name(routeCreateRequestDto.getName())
                .status(routeCreateRequestDto.getStatus())
                .direction(routeCreateRequestDto.getDirection())
                .stops(stops)
                .build();
        routeRepository.save(route);
    }

    public void deleteRouteById(String id){
        routeRepository.deleteById(id);
    }

    public void deleteAllRoutes() {
        routeRepository.deleteAll();
    }
}
