const api = "https://discord.com/api/guilds/1033065899932008498/widget.json"
$.ajax({
  url: api,
  type: 'get',
  dataType: 'json',
  error: function(data) { console.error("wtf"); },
  success: function(data) {
    let invcode = data.instant_invite.split("/")[4]

    // window.location.replace(data.instant_invite);


    var invite_data = `https://discord.com/api/v9/invites/${invcode}`;
    $.getJSON(invite_data, function(data) {
      console.log(data.guild.name);
      console.log(data.guild.icon);

      $('head').append('<meta property="og:description" content="' + "None" + '">');

      $('head').append('<meta property="og:url" content="' + `https://discord.gg/${data.code}` + '">');

      $('head').append('<meta property="og:image" content="' + `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png` + '">');

      $('head').append('<meta property="og:title" content="' + data.guild.name + '">');

    });
  }
})
/*

*/


var sample = { "code": "hpbZFbGD", "type": 0, "expires_at": "2022-12-30T13:13:43+00:00", "guild": { "id": "1033065899932008498", "name": "Hmmm?", "splash": null, "banner": null, "description": null, "icon": "92cc191c573d55a12b3e566b956a7338", "features": ["AUTO_MODERATION", "MEMBER_VERIFICATION_GATE_ENABLED", "APPLICATION_COMMAND_PERMISSIONS_V2", "PREVIEW_ENABLED", "NEWS", "COMMUNITY"], "verification_level": 1, "vanity_url_code": null, "premium_subscription_count": 0, "nsfw": false, "nsfw_level": 0 }, "channel": { "id": "1033379508088213584", "name": "\uff0ereaction-here\ufe52\u22b9\u02da\u22c6", "type": 0 } }