#!/data/data/com.termux/files/usr/bin/bash

if (! dpkg -l | grep ossp-uuid) then 
	apt install ossp-uuid
	clear
fi

stable_pack_url="https://aka.ms/behaviorpacktemplate"
beta_pack_url="https://aka.ms/minecraftbetabehaviors"

get_version () {
	url=$1
	echo $(curl -w '%{redirect_url}' -s "$url" | grep -oP '\d+\.\d+\.\d+(\.\d+)?(?=\.zip)')
}

icon="iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADyUlEQVR4Ae2dzUpVYRiF94kNTcqB1imO4iydFJGNugEbilegA8G7cCB4Dw2cKDjsAiJoFk1CjQNFOZM6mP0MpIkgaPfwDF4W3+N88b5rrYfvDL69t4Odz+vXHfj7eDQG6q4bzd9n+pmHSD/5c8b0p7+QnvqfwPm30PaK4xMQgPgKmQEBYPnFqwUgvkJmQABYfvFqAYivkBkQAJZfvFoA4itkBgSA5RevFoD4CpkBAWD5xasFIL5CZkAAWH7xagGIr5AZEACWX7x6sHrwHD0PMNy9RCGcb9xm+tMLpB/OTyE9vc+/2vqO5vfbc0jvCYDiyxcLQH6HyIEAoPjyxQKQ3yFyIAAovnyxAOR3iBwIAIovXywA+R0iBwKA4ssXC0B+h8iBAKD48sUCkN8hciAAKL58sQDkd4gcCACKL1/c0/v8pZU1lMLh7h7SDzv2PEG/zb5PQO/zR/fuIP/Hfh8A5de82J+AxhEQAAFoPIHG7XsCCEDjCTRu3xNAABpPoHH7ngAC0HgCjdv3BBCAxhNo3L4ngAA0nkDj9j0BGgdg8GpzGX0f4Odf9n7+g2n2fv5w5i6q8M2Hr0hP7/Op/6NvE7S/JwCKL18sAPkdIgcCgOLLFwtAfofIgQCg+PLFApDfIXIgACi+fLEA5HeIHAgAii9fLAD5HSIHAoDiyxcLQH6HyIEAoPjyxQKQ3yFyIAAovnxxT+/zJ7//oRSo/tnCCM2n9/lPHs2i+fR5BDT8v9gTgCYYrheA8ALp+gJAEwzXC0B4gXR9AaAJhusFILxAur4A0ATD9QIQXiBdXwBoguF6AQgvkK4vADTBcL0AhBdI1xcAmmC4XgDCC6TrCwBNMFzf0/vsrvuBIqDPA9D34+n/O/j0bh/5p88z0Oc5PAFQffliAcjvEDkQABRfvlgA8jtEDgQAxZcvFoD8DpEDAUDx5YsFIL9D5EAAUHz5YgHI7xA5EAAUX75YAPI7RA4EAMWXLxaA/A6RAwFA8eWL+/EJu8+n37unzwO8fLGIWjj/8hbpnz5eQPrq/D0BUH35YgHI7xA5EAAUX75YAPI7RA4EAMWXLxaA/A6RAwFA8eWLBSC/Q+RAAFB8+WIByO8QORAAFF++WADyO0QOBADFly8WgPwOkQMBQPHli3t6H08joO/nj9+/piuU6mn+9PsOngCl9dcPF4D6Dko3EIDS+OuHC0B9B6UbCEBp/PXDBaC+g9INBKA0/vrhAlDfQekGAlAaf/1wAajvoHQDASiNv364ANR3ULqBAJTGXz9cAOo7KN1AAErjrx9+A/YwXc+CLVwxAAAAAElFTkSuQmCC"

root=$1
read -p "name: " name
name=$( echo $name | sed -e 's/[\\/:*?"<>|]//g' )
echo "Name = $name"

read -p "desc: " desc
echo "Desc = $desc"
echo
echo

path="$root/$name"
echo "Path = $path"
echo

beta=$(get_version "$beta_pack_url")
echo "Beta = $beta"
echo

main="$path/source/$beta/0.1.0"
echo "Main: $main"
echo

script="$main/$name.js"
echo "Script = $script"
echo

mkdir -p "$path/libraries/"
mkdir -p "$path/packages/"
mkdir -p "$path/modules/"
mkdir -p "$main/module"
touch "$script"


uuid1=$(uuid)
echo "Uuid1 = $uuid1"
echo

uuid2=$(uuid)
echo "Uuid2 = $uuid2"
echo

now=$(date +"%d.%m.%Y.%Z.%T%p")

manifest="{\n\t\"format_version\": 2,\n\t\n\t\"header\": {\n\t\t\"name\": \"$name\",\n\t\t\"description\": \"$desc\",\n\t\t\"developers\": [],\n\t\t\"uuid\": \"$uuid1\",\n\t\t\"version\": [0, 1, 0],\n\t\t\"created_at\": \"$now\",\n\t\t\"min_engine_version\": [1, 18, 0 ]\n\t},\n\t\n\t\"modules\": [\n\t\t{\n\t\t\t\"description\": \"gametest-module\",\n\t\t\t\"type\": \"javascript\",\n\t\t\t\"uuid\": \"$uuid2\",\n\t\t\t\"version\": [0, 0, 1],\n\t\t\t\"entry\": \"$script\"\n\t\t}\n\t],\n\t\n\t\"dependencies\": [\n\t\t{\n\t\t\t// Minecraft native module - needed to use the \"mojang-minecraft\" module\n\t\t\t\"uuid\": \"b26a4d4c-afdf-4690-88f8-931846312678\",\n\t\t\t\"version\": [0, 1, 0]\n\t\t},\n\t\t{\n\t\t\t// Minecraft Ui native module - needed to use the \"mojang-minecraft-ui\" module\n\t\t\t\"uuid\": \"2bd50a27-ab5f-4f40-a596-3641627c635e\",\n\t\t\t\"version\": [0, 1, 0]\n\t\t}\n\t]\n}\n\n"
echo -e "$manifest" > "$path/manifest.json"

echo $icon | base64 -d > "$path/pack_icon.png"

