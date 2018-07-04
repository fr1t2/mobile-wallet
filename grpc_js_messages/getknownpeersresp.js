/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.qrl.GetKnownPeersResp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.qrl.NodeInfo');
goog.require('proto.qrl.Peer');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qrl.GetKnownPeersResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qrl.GetKnownPeersResp.repeatedFields_, null);
};
goog.inherits(proto.qrl.GetKnownPeersResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qrl.GetKnownPeersResp.displayName = 'proto.qrl.GetKnownPeersResp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qrl.GetKnownPeersResp.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qrl.GetKnownPeersResp.prototype.toObject = function(opt_includeInstance) {
  return proto.qrl.GetKnownPeersResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qrl.GetKnownPeersResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.GetKnownPeersResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeInfo: (f = msg.getNodeInfo()) && proto.qrl.NodeInfo.toObject(includeInstance, f),
    knownPeersList: jspb.Message.toObjectList(msg.getKnownPeersList(),
    proto.qrl.Peer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qrl.GetKnownPeersResp}
 */
proto.qrl.GetKnownPeersResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qrl.GetKnownPeersResp;
  return proto.qrl.GetKnownPeersResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qrl.GetKnownPeersResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qrl.GetKnownPeersResp}
 */
proto.qrl.GetKnownPeersResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qrl.NodeInfo;
      reader.readMessage(value,proto.qrl.NodeInfo.deserializeBinaryFromReader);
      msg.setNodeInfo(value);
      break;
    case 2:
      var value = new proto.qrl.Peer;
      reader.readMessage(value,proto.qrl.Peer.deserializeBinaryFromReader);
      msg.addKnownPeers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qrl.GetKnownPeersResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qrl.GetKnownPeersResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qrl.GetKnownPeersResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qrl.GetKnownPeersResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.qrl.NodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getKnownPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.qrl.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * optional NodeInfo node_info = 1;
 * @return {?proto.qrl.NodeInfo}
 */
proto.qrl.GetKnownPeersResp.prototype.getNodeInfo = function() {
  return /** @type{?proto.qrl.NodeInfo} */ (
    jspb.Message.getWrapperField(this, proto.qrl.NodeInfo, 1));
};


/** @param {?proto.qrl.NodeInfo|undefined} value */
proto.qrl.GetKnownPeersResp.prototype.setNodeInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qrl.GetKnownPeersResp.prototype.clearNodeInfo = function() {
  this.setNodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qrl.GetKnownPeersResp.prototype.hasNodeInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Peer known_peers = 2;
 * @return {!Array.<!proto.qrl.Peer>}
 */
proto.qrl.GetKnownPeersResp.prototype.getKnownPeersList = function() {
  return /** @type{!Array.<!proto.qrl.Peer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qrl.Peer, 2));
};


/** @param {!Array.<!proto.qrl.Peer>} value */
proto.qrl.GetKnownPeersResp.prototype.setKnownPeersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.qrl.Peer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qrl.Peer}
 */
proto.qrl.GetKnownPeersResp.prototype.addKnownPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.qrl.Peer, opt_index);
};


proto.qrl.GetKnownPeersResp.prototype.clearKnownPeersList = function() {
  this.setKnownPeersList([]);
};


