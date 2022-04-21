if (! dpkg -l | grep ossp-uuid) then 
apt install ossp-uuid
clear
fi

icon="iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADyUlEQVR4Ae2dzUpVYRiF94kNTcqB1imO4iydFJGNugEbilegA8G7cCB4Dw2cKDjsAiJoFk1CjQNFOZM6mP0MpIkgaPfwDF4W3+N88b5rrYfvDL69t4Odz+vXHfj7eDQG6q4bzd9n+pmHSD/5c8b0p7+QnvqfwPm30PaK4xMQgPgKmQEBYPnFqwUgvkJmQABYfvFqAYivkBkQAJZfvFoA4itkBgSA5RevFoD4CpkBAWD5xasFIL5CZkAAWH7xagGIr5AZEACWX7x6sHrwHD0PMNy9RCGcb9xm+tMLpB/OTyE9vc+/2vqO5vfbc0jvCYDiyxcLQH6HyIEAoPjyxQKQ3yFyIAAovnyxAOR3iBwIAIovXywA+R0iBwKA4ssXC0B+h8iBAKD48sUCkN8hciAAKL58sQDkd4gcCACKL1/c0/v8pZU1lMLh7h7SDzv2PEG/zb5PQO/zR/fuIP/Hfh8A5de82J+AxhEQAAFoPIHG7XsCCEDjCTRu3xNAABpPoHH7ngAC0HgCjdv3BBCAxhNo3L4ngAA0nkDj9j0BGgdg8GpzGX0f4Odf9n7+g2n2fv5w5i6q8M2Hr0hP7/Op/6NvE7S/JwCKL18sAPkdIgcCgOLLFwtAfofIgQCg+PLFApDfIXIgACi+fLEA5HeIHAgAii9fLAD5HSIHAoDiyxcLQH6HyIEAoPjyxQKQ3yFyIAAovnxxT+/zJ7//oRSo/tnCCM2n9/lPHs2i+fR5BDT8v9gTgCYYrheA8ALp+gJAEwzXC0B4gXR9AaAJhusFILxAur4A0ATD9QIQXiBdXwBoguF6AQgvkK4vADTBcL0AhBdI1xcAmmC4XgDCC6TrCwBNMFzf0/vsrvuBIqDPA9D34+n/O/j0bh/5p88z0Oc5PAFQffliAcjvEDkQABRfvlgA8jtEDgQAxZcvFoD8DpEDAUDx5YsFIL9D5EAAUHz5YgHI7xA5EAAUX75YAPI7RA4EAMWXLxaA/A6RAwFA8eWL+/EJu8+n37unzwO8fLGIWjj/8hbpnz5eQPrq/D0BUH35YgHI7xA5EAAUX75YAPI7RA4EAMWXLxaA/A6RAwFA8eWLBSC/Q+RAAFB8+WIByO8QORAAFF++WADyO0QOBADFly8WgPwOkQMBQPHli3t6H08joO/nj9+/piuU6mn+9PsOngCl9dcPF4D6Dko3EIDS+OuHC0B9B6UbCEBp/PXDBaC+g9INBKA0/vrhAlDfQekGAlAaf/1wAajvoHQDASiNv364ANR3ULqBAJTGXz9cAOo7KN1AAErjrx9+A/YwXc+CLVwxAAAAAElFTkSuQmCC"
icon_error="iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADs0lEQVR4Ae2dzYrPYRiGZ/Q/AmPIx9JXzEYpC0lKFsoROAI7a2djoeyVJDVJ1OSrJPnKCsXgFHAO1+Lp6nfN/p7nue/76p3F+87/v373we2/a+Dn1evXQL22dvjIIaQ/sHkA6X/s/kD6b1+/Iz31T+fvQdsn1icQAPoKmYEAYPnp1QGgr5AZCACWn14dAPoKmYEAYPnp1QGgr5AZCACWn14dAPoKmYEAYPnp1QGgr5AZCACWn14dAPoKmYEAYPnp1St6n//x8VsWwkUmf7HD3iMcPMzeE9D7/O07D1EAl65fQfpOABSfXxwA/g6RgwBA8fnFAeDvEDkIABSfXxwA/g6RgwBA8fnFAeDvEDkIABSfXxwA/g6RgwBA8fnFAeDvEDkIABSfXxwA/g6RgwBA8fnFK3qff/nqNZTCo/v3kJ6Kz547g34Fvc/fv7mB5vf5ACi+xP0JWDgDARAAC09g4fY7AQJg4Qks3H4nQAAsPIGF2+8ECICFJ7Bw+50AAbDwBBZuvxMgABaewMLtdwIsHID1WzdvoO8L+PX7D4pw38ZepN+A+idPd9B8ep9P/b97/wnt3wmA4vOLA8DfIXIQACg+vzgA/B0iBwGA4vOLA8DfIXIQACg+vzgA/B0iBwGA4vOLA8DfIXIQACg+vzgA/B0iBwGA4vOLA8DfIXIQACg+v3hF7/N/7v5GKVD9qZPH0Hx6n3/i+FE0n75HQMP/izsBaIJyfQDIC6TrBwBNUK4PAHmBdP0AoAnK9QEgL5CuHwA0Qbk+AOQF0vUDgCYo1weAvEC6fgDQBOX6AJAXSNcPAJqgXB8A8gLp+gFAE5TrV/Q+m/qn7wHo/8fT7zt4+XQbRUDfM9D3HJ0AqD6/OAD8HSIHAYDi84sDwN8hchAAKD6/OAD8HSIHAYDi84sDwN8hchAAKD6/OAD8HSIHAYDi84sDwN8hchAAKD6/OAD8HSIHAYDi84tXHz5+Ri7o593T9wAXzp9D+3//8h7pt7ZOI/10/p0AqD6/OAD8HSIHAYDi84sDwN8hchAAKD6/OAD8HSIHAYDi84sDwN8hchAAKD6/OAD8HSIHAYDi84sDwN8hchAAKD6/OAD8HSIHAYDi84tX9D6eRkD/P//N82d0hVE9zZ9+vkMnwGj988MDYL6D0Q0CYDT++eEBMN/B6AYBMBr//PAAmO9gdIMAGI1/fngAzHcwukEAjMY/PzwA5jsY3SAARuOfHx4A8x2MbhAAo/HPDw+A+Q5GNwiA0fjnh/8DjkRdvTKf5oMAAAAASUVORK5CYII="

# Init
root=$1
read -p "Name: " name
read -p "Desc: " desc
read -p "Main: " main

script_name=$(echo $main | sed -e 's/[^A-Za-z0-9_]/_/g')

# Setup
echo "$name: Creating folders"
mkdir -p $root/scripts
mkdir -p $root/scripts/libraries
mkdir -p $root/scripts/packages
mkdir -p $root/scripts/modules

echo "$name: Creating files"

# Manifest
uuid1=$(uuid)
uuid2=$(uuid)

manifest="$root/manifest.json"
echo -e "{\n\t\"format_version\": 2,\n\t\n\t\"header\": {\n\t\t\"name\": \"$name\",\n\t\t\"description\": \"$desc\",\n\t\t\"developer\": [],\n\t\t\"uuid\": \"$uuid1\",\n\t\t\"version\": [0, 0, 1],\n\t\t\"min_engine_version\": [1, 18, 2 ],\n\t\t\"license\": \"\",\n\t\t\"media\": { \"discord\": \"\" }\n\t},\n\t\n\t\"modules\": [\n\t\t{\n\t\t\t\"description\": \"gametest-module\",\n\t\t\t\"type\": \"javascript\",\n\t\t\t\"uuid\": \"$uuid2\",\n\t\t\t\"version\": [0, 0, 1],\n\t\t\t\"entry\": \"scripts/script.js\"\n\t\t}\n\t],\n\t\n\t\"dependencies\": [\n\t\t{\n\t\t\t// Minecraft native module - needed to use the \"mojang-minecraft\" module\n\t\t\t\"uuid\": \"b26a4d4c-afdf-4690-88f8-931846312678\",\n\t\t\t\"version\": [0, 1, 0]\n\t\t},\n\t\t{\n\t\t\t// Minecraft Ui native module - needed to use the \"mojang-minecraft-ui\" module\n\t\t\t\"uuid\": \"2bd50a27-ab5f-4f40-a596-3641627c635e\",\n\t\t\t\"version\": [0, 1, 0]\n\t\t}\n\t]\n}\n\n" > $manifest

# Main script
script_path="scripts/$script_name.js"
script="$root/$script_path"

echo -e "import { world } from \"mojang-minecraft\"\n\nworld.events.tick.subscribe(eventData => {\n\tconst { currentTick } = eventData;\n\t// Your code here\n})" > $script

# Pack icon
echo $icon | base64 -d > $root/pack_icon.png
echo $icon_error | base64 -d > $root/bug_pack_icon.png



