/**
 * Created by aanderson on 3/1/15.
 */

var Glob = {};
Glob.data = {
  routes: [
      { tag: "N", name: "N-Judah", color: "003399", oppositeColor: "ffffff" },
      { tag: "33", name: "33-Stanyan", color: "660000", oppositeColor: "ffffff" }
  ]
};

var Route = React.createClass({displayName: "Route",

    propTypes: {
        tag: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        liStyle: React.PropTypes.object.isRequired
    },

    getDefaultProps: function() {
        return {
            tag: "n/a",
            name: "Unknown",
            liStyle: {
                backgroundColor: "#555555",
                color: "#ffffff"
            }
        };
    },

    render: function() {
        return (
            React.createElement("li", null, 
                React.createElement("span", {style: this.props.liStyle}, 
                    this.props.tag
                ), " -", 
                React.createElement("span", null, 
                    this.props.name
                )
            )
        );
    }
});



var RouteList = React.createClass({displayName: "RouteList",
    getInitialState: function() {
        return { data: Glob.data };
    },

    render: function() {
        return (
            React.createElement("ul", null, 
                this.state.data.routes.map(function(rt) {
                    var liStyle = {
                        color: "#" + rt.oppositeColor,
                        backgroundColor: "#" + rt.color
                    };
                    return (
                        React.createElement(Route, {key: rt.tag, ref: rt.tag, tag: rt.tag, name: rt.name, liStyle: liStyle})
                    );
                })
            )
        );
    }
});




var HelloMessage = React.createClass({displayName: "HelloMessage",
    remove: function() {
        console.log("HERE");
        Glob.data.routes.pop();
        this.refs.routeList.setState({data: Glob.data});
    },

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello ", this.props.name, "!"), 
                React.createElement("button", {onClick: this.remove}, "Remove"), 
                React.createElement(RouteList, {ref: "routeList"})
            )
        );
    }
});

React.render(React.createElement(HelloMessage, {name: "Adam"}), document.getElementById("body"));






//React.render(<RouteList />, document.getElementById("routeList"));