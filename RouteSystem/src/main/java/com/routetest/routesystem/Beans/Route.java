package com.routetest.routesystem.Beans;

import com.routetest.routesystem.Enums.Direction;
import com.routetest.routesystem.Enums.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Document(collection = "routes")
public class Route {

    @Id
    String id;
    String name;
    Direction direction;
    Status status;
    List<Stop> stops;

}
