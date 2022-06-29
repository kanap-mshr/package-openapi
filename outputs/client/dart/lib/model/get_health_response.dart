//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class GetHealthResponse {
  /// Returns a new [GetHealthResponse] instance.
  GetHealthResponse({
    @required this.status,
  });

  GetHealthResponseStatusEnum status;

  @override
  bool operator ==(Object other) => identical(this, other) || other is GetHealthResponse &&
     other.status == status;

  @override
  int get hashCode =>
    (status == null ? 0 : status.hashCode);

  @override
  String toString() => 'GetHealthResponse[status=$status]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'status'] = status;
    return json;
  }

  /// Returns a new [GetHealthResponse] instance and imports its values from
  /// [json] if it's non-null, null if [json] is null.
  static GetHealthResponse fromJson(Map<String, dynamic> json) => json == null
    ? null
    : GetHealthResponse(
        status: GetHealthResponseStatusEnum.fromJson(json[r'status']),
    );

  static List<GetHealthResponse> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <GetHealthResponse>[]
      : json.map((v) => GetHealthResponse.fromJson(v)).toList(growable: true == growable);

  static Map<String, GetHealthResponse> mapFromJson(Map<String, dynamic> json) {
    final map = <String, GetHealthResponse>{};
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic v) => map[key] = GetHealthResponse.fromJson(v));
    }
    return map;
  }

  // maps a json object with a list of GetHealthResponse-objects as value to a dart map
  static Map<String, List<GetHealthResponse>> mapListFromJson(Map<String, dynamic> json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<GetHealthResponse>>{};
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic v) {
        map[key] = GetHealthResponse.listFromJson(v, emptyIsNull: emptyIsNull, growable: growable);
      });
    }
    return map;
  }
}


class GetHealthResponseStatusEnum {
  /// Instantiate a new enum with the provided [value].
  const GetHealthResponseStatusEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value;

  String toJson() => value;

  static const ok = GetHealthResponseStatusEnum._(r'ok');

  /// List of all possible values in this [enum][GetHealthResponseStatusEnum].
  static const values = <GetHealthResponseStatusEnum>[
    ok,
  ];

  static GetHealthResponseStatusEnum fromJson(dynamic value) =>
    GetHealthResponseStatusEnumTypeTransformer().decode(value);

  static List<GetHealthResponseStatusEnum> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <GetHealthResponseStatusEnum>[]
      : json
          .map((value) => GetHealthResponseStatusEnum.fromJson(value))
          .toList(growable: true == growable);
}

/// Transformation class that can [encode] an instance of [GetHealthResponseStatusEnum] to String,
/// and [decode] dynamic data back to [GetHealthResponseStatusEnum].
class GetHealthResponseStatusEnumTypeTransformer {
  const GetHealthResponseStatusEnumTypeTransformer._();

  factory GetHealthResponseStatusEnumTypeTransformer() => _instance ??= GetHealthResponseStatusEnumTypeTransformer._();

  String encode(GetHealthResponseStatusEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a GetHealthResponseStatusEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  GetHealthResponseStatusEnum decode(dynamic data, {bool allowNull}) {
    switch (data) {
      case r'ok': return GetHealthResponseStatusEnum.ok;
      default:
        if (allowNull == false) {
          throw ArgumentError('Unknown enum value to decode: $data');
        }
    }
    return null;
  }

  /// Singleton [GetHealthResponseStatusEnumTypeTransformer] instance.
  static GetHealthResponseStatusEnumTypeTransformer _instance;
}

