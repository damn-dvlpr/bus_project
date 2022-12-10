package com.routetest.routesystem.Service;

import com.routetest.routesystem.Beans.Stop;
import com.routetest.routesystem.Repository.StopRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class StopService {

    @Autowired
    private StopRepository stopRepository;

    public void addStop(Stop stop){
        stopRepository.save(stop);
    }

    public List<Stop> getAllStops() {
        return stopRepository.findAll();
    }
}
